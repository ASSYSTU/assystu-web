#!/usr/bin/env bash
# check-links.sh — Verifica que las rutas principales del sitio no devuelvan 404
# Uso: bash scripts/check-links.sh
# Requiere: curl

set -euo pipefail

BASE="https://www.assystu.com"
PASS=0
FAIL=0
WARN=0

GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m'

check_url() {
  local label="$1"
  local path="$2"
  local expected_code="${3:-200}"   # por defecto 200
  local warn_only="${4:-false}"     # si true, falla como WARN en vez de FAIL

  local url="$BASE$path"
  local actual_code
  # Seguir redirects para verificar el destino final
  actual_code=$(curl -sI --max-time 10 -L -o /dev/null -w "%{http_code}" "$url")

  if [[ "$actual_code" == "$expected_code" ]]; then
    echo -e "${GREEN}✅ $actual_code${NC} — $label ($path)"
    PASS=$((PASS + 1))
  elif [[ "$warn_only" == "true" ]]; then
    echo -e "${YELLOW}⚠️  $actual_code${NC} — $label ($path) [esperado $expected_code — pendiente]"
    WARN=$((WARN + 1))
  else
    echo -e "${RED}❌ $actual_code${NC} — $label ($path) [esperado $expected_code]"
    FAIL=$((FAIL + 1))
  fi
}

echo ""
echo "========================================"
echo "  Link checker — assystu.com"
echo "  $(date '+%Y-%m-%d %H:%M:%S')"
echo "========================================"
echo ""

echo "--- Páginas principales ---"
check_url "Home"          "/"
check_url "Happy Brain"   "/happy-brain"
check_url "TransformaERP" "/transformaerp"
check_url "Contacto"      "/contacto"

echo ""
echo "--- Páginas de error y fallback ---"
# /lo-sentimos es la custom 404 page — devuelve 404 HTTP por diseño (Next.js)
check_url "Lo sentimos (404 custom)" "/lo-sentimos" "404"

echo ""
echo "--- Páginas legales (pendientes de contenido) ---"
check_url "Términos y condiciones" "/terminos"   "200" "true"
check_url "Política de privacidad" "/privacidad" "200" "true"
check_url "Aviso de cookies"       "/cookies"    "200" "true"

echo ""
echo "========================================"
if [[ $WARN -gt 0 ]]; then
  echo -e "  Resultado: ${GREEN}$PASS PASS${NC}  |  ${RED}$FAIL FAIL${NC}  |  ${YELLOW}$WARN WARN (pendientes OK)${NC}"
else
  echo -e "  Resultado: ${GREEN}$PASS PASS${NC}  |  ${RED}$FAIL FAIL${NC}"
fi
echo "========================================"
echo ""

if [[ $FAIL -gt 0 ]]; then
  exit 1
fi
