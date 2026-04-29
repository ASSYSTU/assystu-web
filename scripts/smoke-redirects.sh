#!/usr/bin/env bash
# smoke-redirects.sh — Smoke test de redirects críticos de assystu.com
# Uso: bash scripts/smoke-redirects.sh
# Requiere: curl

BASE="https://www.assystu.com"
PASS=0
FAIL=0

GREEN='\033[0;32m'
RED='\033[0;31m'
NC='\033[0m'

# Verifica que una URL redirige (301) y que el destino final contiene expected_location
check_redirect_final() {
  local label="$1"
  local url="$2"
  local expected_final="$3"   # cadena esperada en la URL final (después de todos los redirects)

  local final_url
  final_url=$(curl -sI --max-time 10 -L -o /dev/null -w "%{url_effective}" "$url" 2>/dev/null || true)

  local first_code
  first_code=$(curl -sI --max-time 10 --max-redirs 0 -o /dev/null -w "%{http_code}" "$url" 2>/dev/null || true)

  if [[ "$first_code" == "301" && "$final_url" == *"$expected_final"* ]]; then
    echo -e "${GREEN}✅ PASS${NC} — $label"
    echo "       $url → $final_url ($first_code)"
    PASS=$((PASS + 1))
  else
    echo -e "${RED}❌ FAIL${NC} — $label"
    echo "       URL:      $url"
    echo "       Esperado: 301 → *$expected_final*"
    echo "       Obtenido: $first_code → $final_url"
    FAIL=$((FAIL + 1))
  fi
}

# Verifica que una URL carga con el código esperado y NO redirige a not_location
check_status() {
  local label="$1"
  local url="$2"
  local expected_code="$3"
  local not_location="${4:-}"

  local actual_code
  actual_code=$(curl -sI --max-time 10 --max-redirs 0 -o /dev/null -w "%{http_code}" "$url" 2>/dev/null || true)

  local actual_location
  actual_location=$(curl -sI --max-time 10 --max-redirs 0 "$url" 2>/dev/null | grep -i "^location:" | awk '{print $2}' | tr -d '\r' || true)

  local location_ok=true
  if [[ -n "$not_location" && "$actual_location" == *"$not_location"* ]]; then
    location_ok=false
  fi

  if [[ "$actual_code" == "$expected_code" && "$location_ok" == true ]]; then
    echo -e "${GREEN}✅ PASS${NC} — $label ($actual_code)"
    PASS=$((PASS + 1))
  else
    echo -e "${RED}❌ FAIL${NC} — $label"
    echo "       URL:      $url"
    echo "       Esperado: $expected_code"
    echo "       Obtenido: $actual_code → $actual_location"
    FAIL=$((FAIL + 1))
  fi
}

echo ""
echo "========================================"
echo "  Smoke test — redirects assystu.com"
echo "  $(date '+%Y-%m-%d %H:%M:%S')"
echo "========================================"
echo ""

echo "--- Dominio canónico ---"
check_redirect_final "assystu.com → www (destino final)" \
  "http://assystu.com" \
  "https://www.assystu.com"

echo ""
echo "--- Redirects legacy WordPress ---"
check_redirect_final "/contactanos/ → /contacto" \
  "$BASE/contactanos/" \
  "assystu.com/contacto"

check_redirect_final "/nuestros-servicios/ → /transformaerp" \
  "$BASE/nuestros-servicios/" \
  "assystu.com/transformaerp"

check_redirect_final "/quienes-somos/ → /happy-brain" \
  "$BASE/quienes-somos/" \
  "assystu.com/happy-brain"

check_redirect_final "/novedades/ → /happy-brain" \
  "$BASE/novedades/" \
  "assystu.com/happy-brain"

check_redirect_final "/calendario-cursos/ → /transformaerp" \
  "$BASE/calendario-cursos/" \
  "assystu.com/transformaerp"

echo ""
echo "--- Rutas válidas (NO deben ser redirigidas) ---"
check_status "/contacto carga OK"      "$BASE/contacto"      "200"
check_status "/happy-brain carga OK"   "$BASE/happy-brain"   "200"
check_status "/transformaerp carga OK" "$BASE/transformaerp" "200"

echo ""
echo "--- Rutas especiales ---"
# /lo-sentimos es la custom 404 page de Next.js — devuelve 404 correctamente (no loop)
check_status "/lo-sentimos sin loop (404 custom OK)" "$BASE/lo-sentimos" "404" "/lo-sentimos"

echo ""
echo "--- Assets no redirigidos ---"
asset_code=$(curl -sI --max-time 10 --max-redirs 0 -o /dev/null -w "%{http_code}" "$BASE/_next/static/" 2>/dev/null || true)
asset_loc=$(curl -sI --max-time 10 --max-redirs 0 "$BASE/_next/static/" 2>/dev/null | grep -i "^location:" | awk '{print $2}' | tr -d '\r' || true)
# 308 = Netlify quita trailing slash (/_next/static/ → /_next/static) — es OK, no es redirect de contenido
if [[ -z "$asset_loc" || "$asset_loc" == "/_next/static" ]]; then
  echo -e "${GREEN}✅ PASS${NC} — /_next/static/ no redirigido a contenido ($asset_code)"
  PASS=$((PASS + 1))
else
  echo -e "${RED}❌ FAIL${NC} — /_next/static/ tiene Location inesperado: $asset_loc"
  FAIL=$((FAIL + 1))
fi

echo ""
echo "========================================"
echo -e "  Resultado: ${GREEN}$PASS PASS${NC}  |  ${RED}$FAIL FAIL${NC}"
echo "========================================"
echo ""

if [[ $FAIL -gt 0 ]]; then
  exit 1
fi
