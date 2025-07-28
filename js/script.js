const machineGroups = {
  inyeccion: ["D9", "D4", "D7/DT4", "D8/D17 Lentes", "D13","D15", "DT13","DT8","D11", "DT9", "D19/DT6 BMC", "DT5","DT6", "D2", "D15", "D3", "D12", "D5", "D6", "D10", "DT10"],
  montaje: ["P10", "P11", "P12", "P13", "M1", "M2", "M3"]
};

// Catálogo normal
const catalog = [
  { articulo: "REFL D FG FI 326" },
  { articulo: "REFL I FG FI 326" },
  { articulo: "CONJ REFLECTOR LUZ CRUCE FLAT DER" },
  { articulo: "CONJ REFLECTOR LUZ CRUCE FLAT IZQ" }
];

// Catálogo especial para D10, DT10, DT5
const specialCatalog = [
  { codigo: "0095484-6", articulo: "REFL D H7H1 GM VIVA ALUMINIZADO" },
  { codigo: "0095485-6", articulo: "REFL I H7H1 GM VIVA ALUMINIZADO" },
  { codigo: "0095540-6", articulo: "REFL D H1 VW AMAROK ALUMINIZADO" },
  { codigo: "0095541-6", articulo: "REFL I H1 VW AMAROK ALUMINIZADO" },
  { codigo: "0095542-6", articulo: "REFL D H15 VW AMAROK ALUMINIZADO" },
  { codigo: "0095543-6", articulo: "REFL I H15 VW AMAROK ALUMINIZADO" },
  { codigo: "0095587-6", articulo: "REFLECTOR I H7H1 CI C4" },
  { codigo: "0095756-6", articulo: "REFL D H4 TO640ALUMINIZADO" },
  { codigo: "0095757-6", articulo: "REFL I H4 TO 640ALUMINIZADO" },
  { codigo: "0095904-6", articulo: "REFL D H7H7 BAJA GAMA FI 359 ALUMINIZADO" },
  { codigo: "0095905-6", articulo: "REFL I H7H7 BAJA GAMA FI 359 ALUMINIZADO" },
  { codigo: "0095912-6", articulo: "REFL D H7H7 ALTA GAMA FI 359 ALUMINIZADO" },
  { codigo: "0095913-6", articulo: "REFL I H7H7 ALTA GAMA FI 359 ALUMINIZADO" },
  { codigo: "0095972-6", articulo: "REFL. D H7+H1+LG+LC PE 208 ALUMINIZADO" },
  { codigo: "0095973-6", articulo: "REFL. I H7+H1+LG+LC PE 208 ALUMINIZADO" },
  { codigo: "0095986-6", articulo: "REFLECTOR DER H7+H15 FCA X6S ALUMINIZADO" },
  { codigo: "0095987-6", articulo: "REFLECTOR IZQ H7+H15 FCA X6S ALUMINIZADO" },
  { codigo: "1426211-0", articulo: "SC REF DER. CRUCE H7 VW AMAROK" },
  { codigo: "1427211-0", articulo: "SC REF IZQ. CRUCE H7 VW AMAROK" },
  { codigo: "1500211-0", articulo: "CONJ REFLECTOR LUZ DE CRUCE KINK DER PRY AMAROK PA" },
  { codigo: "1500311-0", articulo: "CONJ REFLECTOR LUZ DE RUTA DER PRY AMAROK PA2" },
  { codigo: "1501211-0", articulo: "CONJ REFLECTOR LUZ DE CRUCE KINK IZQ PRY AMAROK PA" },
  { codigo: "1501311-0", articulo: "CONJ REFLECTOR LUZ DE RUTA IZQ PRY AMAROK PA2" },
  { codigo: "1508211-0", articulo: "CONJUNTO REFLECTOR CRUCE/RUTA DER PRY 359 MCA2" },
  { codigo: "1509211-0", articulo: "CONJUNTO REFLECTOR CRUCE/RUTA IZQ PRY 359 MCA2" }
];

// Catálogo especial para D11 y DT9
const specialCatalogD11DT9 = [
  { codigo: "0005486-0", articulo: "MASCARA PRIMARIA DER GM VIVA" },
  { codigo: "0005487-0", articulo: "MASCARA PRIMARIA IZQ GM VIVA" },
  { codigo: "0005902-0", articulo: "MASCARA D NEGRA PR FIAT 359" },
  { codigo: "0005903-0", articulo: "MASCARA I NEGRA PR FIAT 359" },
  { codigo: "1322110-0", articulo: "SC CPO+PUNTO FIJO D CIT C4" },
  { codigo: "1323110-0", articulo: "SC CPO + PUNTO FIJO I CI C4" },
  { codigo: "1426511-0", articulo: "GA EMBELL D C/AROS REDONDOS VW AMAROK" },
  { codigo: "1426711-0", articulo: "SC CPO D FT VW AMAROK C/MA" },
  { codigo: "1427511-0", articulo: "GA EMBELL I C/AROS REDONDOS VW AMAROK" },
  { codigo: "1427711-0", articulo: "SC CPO I FT VW AMAROK C/RN" },
  { codigo: "1428110-0", articulo: "SC CPO D ME VW AMAROK CD" },
  { codigo: "1429110-0", articulo: "SC CPO I ME VW AMAROK CD" },
  { codigo: "1448110-0", articulo: "SC CPO D MM/ME TO 640 (INY.+ P.FIJ)" },
  { codigo: "1448513-0", articulo: "MASCARA PRIMARIA DER.C/LC ALUMINIZADA TO" },
  { codigo: "1448711-0", articulo: "SC CUERPO D FT TO 640 (ALUMINIZADO)" },
  { codigo: "1449110-0", articulo: "SC CPO I MM/ME TO 640(INY.+P.FIJO)" },
  { codigo: "1449513-0", articulo: "MASCARA PRIMARIA IZQ.C/LC ALUMINIZADA TO" },
  { codigo: "1449711-0", articulo: "SC CUERPO I FT TO 640 (ALUMINIZADO) C/RN" },
  { codigo: "1451711-0", articulo: "SC CUERPO I FT TO 640 (ALUMINIZADO) C/MA" },
  { codigo: "1462711-0", articulo: "SC CPO D FT VW AMAROK C/MA NEGRO" },
  { codigo: "1463711-0", articulo: "SC CPO I FT VW AMAROK C/RN NEGRO" },
  { codigo: "1469511-6", articulo: "GA EMB NEGROI + LENTE CI C4" },
  { codigo: "1488711-0", articulo: "SC CPO D FARO TRAS. PE 208 (ALUMINIZADO)" },
  { codigo: "1489711-0", articulo: "SC CPO I FARO TRAS. PE 208 (ALUMINIZADO)" },
  { codigo: "1500110-0", articulo: "SUBCONJUNTO CUERPO DER ME PRY AMAROK PA2" },
  { codigo: "1501110-0", articulo: "SUBCONJUNTO CUERPO IZQ ME PRY AMAROK PA2" },
  { codigo: "1506110-0", articulo: "SC CUERPO DER H15 ALTA GAMA FCA X6S" },
  { codigo: "1507110-0", articulo: "SC CUERPO IZQ H15 ALTA GAMA FCA X6S" },
  { codigo: "1508511-0", articulo: "CONJUNTO MASCARA DER PRY 359 MCA2" },
  { codigo: "1509511-0", articulo: "CONJUNTO MASCARA IZQ PRY 359 MCA2" }
];

// Catálogo especial para D12
const specialCatalogD12 = [
  { codigo: "0005534-6", articulo: "ARO H1/H15 CHICO D.(ALUMIN) PR VW AMAROK" },
  { codigo: "0005535-6", articulo: "ARO H1/H15 CHICO I.(ALUMIN) PR VW AMAROK" },
  { codigo: "0005562-0", articulo: "APLIQUE D FT VW AMAROK" },
  { codigo: "0005563-0", articulo: "APLIQUE I FT VW AMAROK" },
  { codigo: "0005606-0", articulo: "LENTE D ROJO FTB CI C4" },
  { codigo: "0005607-0", articulo: "LENTE I ROJO FTB CI C4" },
  { codigo: "0005772-0", articulo: "MASCARA SECUNDARIA D TO 640" },
  { codigo: "0005773-0", articulo: "MASCARA SECUNDARIA I TO 640" },
  { codigo: "0005848-0", articulo: "APLIQUE D FT VW AMAROK NEGRO" },
  { codigo: "0005849-0", articulo: "APLIQUE I FT VW AMAROK NEGRO" },
  { codigo: "0005916-0", articulo: "SOPORTE L.C.D P/GUIA LUZ ALTA GAMA FI359" },
  { codigo: "0005917-0", articulo: "SOPORTE L.C.I P/GUIA LUZ ALTA GAMA FI359" },
  { codigo: "0006036-0", articulo: "LENTE GRILLA ILUMINADA AMAROK PA2" },
  { codigo: "1416611-0", articulo: "SC REF FG D GM VIVA" },
  { codigo: "1417611-0", articulo: "SC REF FG I GM VIVA" },
  { codigo: "1426611-0", articulo: "SC REF FG D PR VW AMAROK" },
  { codigo: "1427611-0", articulo: "SC REF FG I PR VW AMAROK" },
  { codigo: "1470812-0", articulo: "SC CPO D FTB FCA X6S" },
  { codigo: "1471812-0", articulo: "SC CPO I FTB FCA X6S" }
];

// Catálogo especial para D13, DT13 y DT8
const specialCatalogD13DT13DT8 = [
  { codigo: "1500211-0", articulo: "CONJ REFLECTOR LUZ DE CRUCE KINK DER PRY AMAROK PA" },
  { codigo: "1500213-0", articulo: "CONJ REFLECTOR LUZ DE CRUCE FLAT DER PRY AMAROK PA" },
  { codigo: "1500311-0", articulo: "CONJ REFLECTOR LUZ DE RUTA DER PRY AMAROK PA2" },
  { codigo: "1501211-0", articulo: "CONJ REFLECTOR LUZ DE CRUCE KINK IZQ PRY AMAROK PA" },
  { codigo: "1501213-0", articulo: "CONJ REFLECTOR LUZ DE CRUCE FLAT IZQ PRY AMAROK PA" },
  { codigo: "1501311-0", articulo: "CONJ REFLECTOR LUZ DE RUTA IZQ PRY AMAROK PA2" },
  { codigo: "1508211-0", articulo: "CONJUNTO REFLECTOR CRUCE/RUTA DER PRY 359 MCA2" },
  { codigo: "1509211-0", articulo: "CONJUNTO REFLECTOR CRUCE/RUTA IZQ PRY 359 MCA2" }
];

// Catálogo especial para D15,DT6
const specialCatalogD15DT6 = [
  { codigo: "0005536-6", articulo: "ARO H7 GRANDE D (ALUMIN) PR VW AMAROK" },
  { codigo: "0005537-6", articulo: "ARO H7 GRANDE I (ALUMIN) PR VW AMAROK" },
  { codigo: "0006032-0", articulo: "APLIQUE DER FT AMAROK PA2" },
  { codigo: "0006033-0", articulo: "APLIQUE IZQ FT AMAROK PA2" },
  { codigo: "0006062-6", articulo: "REFLECTOR LUZ DE GIRO ALUMINIZADO DER PRY 359 MCA2" },
  { codigo: "0006063-6", articulo: "REFLECTOR LUZ DE GIRO ALUMINIZADO IZQ PRY 359 MCA2" },
  { codigo: "0095610-0", articulo: "MASCARA DER. FTB CIT C4" },
  { codigo: "0095611-0", articulo: "MASCARA IZQ. FTB CIT C4" },
  { codigo: "1376811-0", articulo: "SC CPO D FTB PE 408 3V" },
  { codigo: "1377811-0", articulo: "SC CPO I FTB PE 408 3V" },
  { codigo: "1382411-0", articulo: "GRUPO MASCARA DER.ROJA FTB VW SURAN GP" },
  { codigo: "1382811-0", articulo: "SC CPO D FTB ROJO FTB VW SURAN ALUMIN." },
  { codigo: "1426611-0", articulo: "SC REF FG D PR VW AMAROK" },
  { codigo: "1427611-0", articulo: "SC REF FG I PR VW AMAROK" },
  { codigo: "1432811-0", articulo: "SC CPO D FTB CI C4 II (ALUMINIZADO)" },
  { codigo: "1433811-0", articulo: "SC CPO I FTB CI C4 II (ALUMINIZADO)" },
  { codigo: "1449713-0", articulo: "SC REFLECTOR + FILTRO RNI TO 640" },
  { codigo: "1470311-0", articulo: "SC REFLECTOR MA.+POS.DER. FTB FCA X6S" },
  { codigo: "1470411-0", articulo: "GRUPO MASCARA DER. FTB FI 359" },
  { codigo: "1470611-0", articulo: "SC REF FG D FI 359" },
  { codigo: "1471311-0", articulo: "SC REFLECTOR MA.+POS.IZQ. FTB FCA X6S" },
  { codigo: "1471411-0", articulo: "GRUPO MASCARA IZQ. FTB FI 359" },
  { codigo: "1471611-0", articulo: "SC REF FG I FI 359" }
];

// Catálogo especial para D2,DT6
const specialCatalogD2DT6 = [
  { codigo: "0005530-6", articulo: "APLIQUE INFERIOR D.(ALUMIN) PR VW AMAROK" },
  { codigo: "0005531-6", articulo: "APLIQUE INFERIOR I.(ALUMIN) PR VW AMAROK" },
  { codigo: "0005532-6", articulo: "APLIQUE FARO GIRO D (ALUMIN.) PRAMAROK" },
  { codigo: "0005533-6", articulo: "APLIQUE FARO GIRO I (ALUMIN.) PR AMAROK" },
  { codigo: "0005536-6", articulo: "ARO H7 GRANDE D (ALUMIN) PR VW AMAROK" },
  { codigo: "0005537-6", articulo: "ARO H7 GRANDE I (ALUMIN) PR VW AMAROK" },
  { codigo: "0005776-0", articulo: "MASCARA DER FT TOYOTA" },
  { codigo: "0005777-0", articulo: "MASCARA IZQ.FT. TOYOTA" },
  { codigo: "0005860-6", articulo: "REFLECTOR GIRO+POS.DER.FTL FI 359 ALUMIN" },
  { codigo: "0005861-6", articulo: "REFLECTOR GIRO+POS.IZQ.FTL FI 359 ALUMIN" },
  { codigo: "0005926-6", articulo: "SOPORTE D ALUMINIZADO BAJA GAMA FIAT 359" },
  { codigo: "0005927-6", articulo: "SOPORTE I ALUMINIZADO BAJA GAMA FIAT 359" },
  { codigo: "0006006-6", articulo: "APLIQUE SUPERIOR DER PRY AMAROK PA2 - ALUMINIZADO" },
  { codigo: "0006007-6", articulo: "APLIQUE SUPERIOR IZQ PRY AMAROK PA2 - ALUMINIZADO" },
  { codigo: "0006037-0", articulo: "CUERPO REFLECTOR GRILLA ILUMINADA AMAROK PA2" },
  { codigo: "0007037-6", articulo: "PLACA MAIZ AGROMETAL PINTADA" },
  { codigo: "0007048-6", articulo: "PLACA SOJA AGROMETAL PINTADA" },
  { codigo: "0007049-6", articulo: "PLACA CIEGA AGROMETAL PINTADA" },
  { codigo: "0095270-0", articulo: "APLIQUE D FTL PE 408 3V" },
  { codigo: "0095271-0", articulo: "APLIQUE I FTL PE 408 3V" },
  { codigo: "1322211-0", articulo: "REF LC D CIT C4" },
  { codigo: "1323211-0", articulo: "REF LC I CIT C4" },
  { codigo: "1323311-0", articulo: "SC REFL I H7+H1 CIT C4" },
  { codigo: "1416513-0", articulo: "MASCARA SECUNDARIA DER.ALUMINIZADA VIVA" },
  { codigo: "1417513-0", articulo: "MASCARA SECUNDARIA IZQ.ALUMINIZADA VIVA" },
  { codigo: "1433611-0", articulo: "SC REF FG I CI C4" },
  { codigo: "1449713-0", articulo: "SC REFLECTOR + FILTRO RNI TO 640" }
];

// Catálogo especial para D3
const specialCatalogD3 = [
  { codigo: "0005268-0", articulo: "ALETA D FTL PE 408 3V NEGRA" },
  { codigo: "0005269-0", articulo: "ALETA I FTL PE 408 3V NEGRA" },
  { codigo: "0005745-0", articulo: "FILTRO ROJO IZQ. RN FT 640" },
  { codigo: "0005870-0", articulo: "FILTRO POSICION OPALINO DER. FTL FCA X6S" },
  { codigo: "0005871-0", articulo: "FILTRO POSICION OPALINO IZQ. FTL FCA X6S" },
  { codigo: "0005886-0", articulo: "FILTRO POSICION OPALINO DER. FTB FCA X6S" },
  { codigo: "0005887-0", articulo: "FILTRO POSICION OPALINO IZQ. FTB FCA X6S" },
  { codigo: "0005888-0", articulo: "ALETA LATERAL D FTB FCA X6S" },
  { codigo: "0005889-0", articulo: "ALETA LATERAL I FTB FCA X6S" },
  { codigo: "0005946-0", articulo: "ALETA DER FT PE 208" },
  { codigo: "0005947-0", articulo: "ALETA IZQ FT PE 208" },
  { codigo: "0005948-0", articulo: "CATADIOPTRICO DER FT PE 208" },
  { codigo: "0005949-0", articulo: "CATADIOPTRICO IZQ FT PE 208" },
  { codigo: "0006052-0", articulo: "MASCARA SECUNDARIA DER PRY 359 MCA2" },
  { codigo: "0006053-0", articulo: "MASCARA SECUNDARIA IZQ PRY 359 MCA2" },
  { codigo: "0006054-0", articulo: "LENTE LUZ DE GIRO DER PRY 359 MCA2" },
  { codigo: "0006055-0", articulo: "LENTE LUZ DE GIRO IZQ PRY 359 MCA2" },
  { codigo: "0007031-0", articulo: "BURLETE SUCCION AGROMETAL" }
];

// Catálogo especial para D4
const specialCatalogD4 = [
  { codigo: "0005970-0", articulo: "MASCARA D NEGRA PR PE 208" },
  { codigo: "0005971-0", articulo: "MASCARA I NEGRA PR PE 208" },
  { codigo: "0006050-0", articulo: "LENTE LUZ DE DIA-POSICION DER PRY 359 MCA2" },
  { codigo: "0006051-0", articulo: "LENTE LUZ DE DIA-POSICION IZQ PRY 359 MCA2" },
  { codigo: "1376815-0", articulo: "SC LEN D FTB PE 408 3V" },
  { codigo: "1377815-0", articulo: "SC LEN I FTB PE 408 3V" },
  { codigo: "1470815-0", articulo: "SC LEN D FTB FI 359 ( TRI-COLOR)" },
  { codigo: "1471815-0", articulo: "SC LEN I FTB FI 359 ( TRI-COLOR)" },
  { codigo: "1488713-0", articulo: "SC MASCARA D FT PE 208 (CATA+CP)" },
  { codigo: "1489713-0", articulo: "SC MASCARA I FT PE 208 (CATA+CP)" },
  { codigo: "1500511-0", articulo: "CONJUNTO MASCARA DER PRY AMAROK PA2" },
  { codigo: "1501511-0", articulo: "CONJUNTO MASCARA IZQ PRY AMAROK PA2" }
];

// Catálogo especial para D5
const specialCatalogD5 = [
  { codigo: "1470110-0", articulo: "SC CUERPO D FCA X6S" },
  { codigo: "1471110-0", articulo: "SC CUERPO I FCA X6S" },
  { codigo: "1472110-0", articulo: "SC CUERPO D MM ALTA GAMA FCA X6S" },
  { codigo: "1473110-0", articulo: "SC CUERPO I MM ALTA GAMA FCA X6S" },
  { codigo: "1488110-0", articulo: "SC CUERPO D MM C/LC PE 208" },
  { codigo: "1489110-0", articulo: "SC CUERPO I MM C/LC PE 208" },
  { codigo: "1490110-0", articulo: "SC CUERPO D MM S/LC PE 208" },
  { codigo: "1491110-0", articulo: "SC CUERPO I MM S/LC PE 208" },
  { codigo: "1504110-0", articulo: "SC CUERPO DER H15 FCA X6S" },
  { codigo: "1505110-0", articulo: "SC CUERPO IZQ H15 FCA X6S" },
  { codigo: "1506110-0", articulo: "SC CUERPO DER H15 ALTA GAMA FCA X6S" },
  { codigo: "1507110-0", articulo: "SC CUERPO IZQ H15 ALTA GAMA FCA X6S" },
  { codigo: "1508110-0", articulo: "SUBCONJUNTO CUERPO DER ME PRY 359 MCA2" },
  { codigo: "1509110-0", articulo: "SUBCONJUNTO CUERPO IZQ ME PRY 359 MCA2" },
  { codigo: "1510110-0", articulo: "SUBCONJUNTO CUERPO DER MM PRY 359 MCA2" },
  { codigo: "1511110-0", articulo: "CONJUNTO CUERPO IZQ MM PRY 359 MCA2" }
];

// Catálogo especial para D6
const specialCatalogD6 = [
  { codigo: "0005970-0", articulo: "MASCARA D NEGRA PR PE 208" },
  { codigo: "0005971-0", articulo: "MASCARA I NEGRA PR PE 208" },
  { codigo: "1318110-0", articulo: "SC CPO D ME PE 307 FII INYECTADO" },
  { codigo: "1376711-0", articulo: "SC CPO D FTL PE 408 3V" },
  { codigo: "1377711-0", articulo: "SC CPO I FTL PE 408 3V" },
  { codigo: "1416110-0", articulo: "SC CPO D GM VIVA (INYECTADO +" },
  { codigo: "1417110-0", articulo: "SC CPO I GM VIVA (INYECTADO +" },
  { codigo: "1426110-0", articulo: "SC CPO D MM VW AMAROK CD" },
  { codigo: "1426511-0", articulo: "GA EMBELL D C/AROS REDONDOS VW AMAROK" },
  { codigo: "1427110-0", articulo: "SC CPO I MM VW AMAROK CD" },
  { codigo: "1427511-0", articulo: "GA EMBELL I C/AROS REDONDOS VW AMAROK" },
  { codigo: "1428110-0", articulo: "SC CPO D ME VW AMAROK CD" },
  { codigo: "1429110-0", articulo: "SC CPO I ME VW AMAROK CD" },
  { codigo: "1433110-0", articulo: "SC CPO I MM CIC4 LOUNGE (INY.+ P.FIJO)" },
  { codigo: "1470712-0", articulo: "SC CPO D FTL FIAT 359" },
  { codigo: "1471712-0", articulo: "SC CPO I FTL FIAT 359" },
  { codigo: "1500113-0", articulo: "CONJUNTO SOPORTE DE REGULACION DER PRY AMAROK PA2" },
  { codigo: "1500611-0", articulo: "CONJUNTO DRL/PL/TI DER PRY AMAROK PA2" },
  { codigo: "1501113-0", articulo: "CONJUNTO SOPORTE DE REGULACION IZQ PRY AMAROK PA2" },
  { codigo: "1501611-0", articulo: "CONJUNTO DRL/PL/TI IZQ PRY AMAROK PA2" },
  { codigo: "1508113-0", articulo: "CONJUNTO SOPORTE DE REGULACION DER PRY 359 MCA2" },
  { codigo: "1509113-0", articulo: "CONJUNTO SOPORTE DE REGULACION IZQ PRY 359 MCA2" }
];

// Catálogo especial para D7,DT4
const specialCatalogD7DT4 = [
  { codigo: "1318511-6", articulo: "GA EMBELL+FRESNEL+LENTE PE 307 FII" },
  { codigo: "1322511-6", articulo: "GA D EMB.+FRESNEL+CUPULA+LENTE" },
  { codigo: "1322711-0", articulo: "SC REF D FT CIT C4 (MONT" },
  { codigo: "1323511-6", articulo: "GA I EMB.+FRESNEL+CUPULA+LENTE" },
  { codigo: "1409711-0", articulo: "SC REF I FT FI 326 (ALUMINIZADO)" },
  { codigo: "1448513-0", articulo: "MASCARA PRIMARIA DER.C/LC ALUMINIZADA TO" },
  { codigo: "1448711-0", articulo: "SC CUERPO D FT TO 640 (ALUMINIZADO)" },
  { codigo: "1449513-0", articulo: "MASCARA PRIMARIA IZQ.C/LC ALUMINIZADA TO" },
  { codigo: "1449711-0", articulo: "SC CUERPO I FT TO 640 (ALUMINIZADO) C/RN" },
  { codigo: "1451711-0", articulo: "SC CUERPO I FT TO 640 (ALUMINIZADO) C/MA" },
  { codigo: "1462711-0", articulo: "SC CPO D FT VW AMAROK C/MA NEGRO" },
  { codigo: "1463711-0", articulo: "SC CPO I FT VW AMAROK C/RN NEGRO" },
  { codigo: "1470511-0", articulo: "GRUPO MASCARA DER. FTL FI 359" },
  { codigo: "1471511-0", articulo: "GRUPO MASCARA IZQ. FTL FI 359" },
  { codigo: "1476513-0", articulo: "MASCARA PRIMAR.D.C/LC SEMI ALUM.TO DAKAR" },
  { codigo: "1476711-0", articulo: "SC CUERPO D FT TO640 PARCIAL.ALUM. DAKAR" },
  { codigo: "1477513-0", articulo: "MASCARA PRIMAR.I.C/LC SEMI ALUM.TO DAKAR" },
  { codigo: "1477711-0", articulo: "SC CUERPO I FT TO640 PARCIAL.ALUM. DAKAR" },
  { codigo: "1488711-0", articulo: "SC CPO D FARO TRAS. PE 208 (ALUMINIZADO)" },
  { codigo: "1489711-0", articulo: "SC CPO I FARO TRAS. PE 208 (ALUMINIZADO)" },
  { codigo: "1500113-0", articulo: "CONJUNTO SOPORTE DE REGULACION DER PRY AMAROK PA2" },
  { codigo: "1500711-0", articulo: "SC CPO D C/MA NEGRO FT AMAROK PA2" },
  { codigo: "1501113-0", articulo: "CONJUNTO SOPORTE DE REGULACION IZQ PRY AMAROK PA2" },
  { codigo: "1501711-0", articulo: "SC CPO I C/RN NEGRO FT AMAROK PA2" },
  { codigo: "1508611-0", articulo: "CONJUNTO LUZ DE DIA/POSICION DER PRY 359 MCA2" },
  { codigo: "1509611-0", articulo: "CONJUNTO LUZ DE DIA/POSICION IZQ PRY 359 MCA2" }
];
// Catálogo especial para D8,DT7
const specialCatalogD8DT7 = [
  { codigo: "1322421-0", articulo: "SC LEN PC D CIT C4 (BARNIZADO)" },
  { codigo: "1323421-0", articulo: "SC LEN PC I CIT C4 (BARNIZADO)" },
  { codigo: "1416421-0", articulo: "SC LEN PC D GM VIVA (BARNIZADO)" },
  { codigo: "1417421-0", articulo: "SC LEN PC I GM VIVA (BARNIZADO)" },
  { codigo: "1426421-0", articulo: "SC LEN PC D VW AMAROK (BARNIZADO)" },
  { codigo: "1427421-0", articulo: "SC LEN PC I VW AMAROK (BARNIZADO)" },
  { codigo: "1433421-0", articulo: "SC LEN PC I CI C4 (BARNIZADO)" },
  { codigo: "1448421-0", articulo: "SC LEN PC D TO 640 (BARNIZADO)" },
  { codigo: "1449421-0", articulo: "SC LEN PC I TO 640 (BARNIZADO)" },
  { codigo: "1470421-0", articulo: "SC LEN PC D FI 359 (BARNIZADO)" },
  { codigo: "1471421-0", articulo: "SC LEN PC I FI 359 (BARNIZADO)" },
  { codigo: "1488421-0", articulo: "SC LEN PC D PE 208 (BARNIZADO)" },
  { codigo: "1489421-0", articulo: "SC LEN PC I PE 208 (BARNIZADO)" },
  { codigo: "1500421-0", articulo: "LENTE DER PRY AMAROK PA2 - BARNIZADO" },
  { codigo: "1501421-0", articulo: "LENTE IZQ PRY AMAROK PA2 - BARNIZADO" },
  { codigo: "1508421-0", articulo: "LENTE BARNIZADA DER PRY 359 MCA2" },
  { codigo: "1509421-0", articulo: "LENTE BARNIZADA IZQ PRY 359 MCA2" }
];

// Catálogo especial para D9
const specialCatalogD9 = [
  { codigo: "1376715-0", articulo: "SC LEN D FTL PE 408 3V" },
  { codigo: "1377715-0", articulo: "SC LEN I FTL PE 408 3V" },
  { codigo: "1409715-0", articulo: "SC LEN I FT FI 326 (TRI-COLOR)" },
  { codigo: "1426715-0", articulo: "SC LEN D FT VW AMAROK (BI COLOR)" },
  { codigo: "1427715-0", articulo: "SC LEN I FT VW AMAROK (BI COLOR)" },
  { codigo: "1448715-0", articulo: "SC LEN D FT TO 640 (BI-COLOR) OK-41" },
  { codigo: "1449715-0", articulo: "SC LEN I FT TO 640 (BI-COLOR) OK-41" },
  { codigo: "1470715-0", articulo: "SC LEN D FTL FI 359 (TRI-COLOR)" },
  { codigo: "1470815-0", articulo: "SC LEN D FTB FI 359 ( TRI-COLOR)" },
  { codigo: "1471715-0", articulo: "SC LEN I FTL FI 359 (TRI-COLOR)" },
  { codigo: "1471815-0", articulo: "SC LEN I FTB FI 359 ( TRI-COLOR)" },
  { codigo: "1488715-0", articulo: "SC LEN D FARO TRASERO PE 208 BI-COLOR" },
  { codigo: "1489715-0", articulo: "SC LEN I FARO TRASERO PE 208 BI-COLOR" },
  { codigo: "1500715-0", articulo: "SC LEN D FT VW AMAROK PA2" },
  { codigo: "1501715-0", articulo: "SC LEN I FT VW AMAROK PA2" }
];

// Catálogo especial para M1
const specialCatalogM1 = [
  { codigo: "1318000-0", articulo: "PRIDE D H7+H7 ME LL PE 3" },
  { codigo: "1322003-0", articulo: "PRY DER H7+H1 ME CITROEN C4 S/LAMP" },
  { codigo: "1323003-0", articulo: "PRY IZQ H7+H1 ME CITROEN C4 S/LAMP" },
  { codigo: "1416003-0", articulo: "PRI D H7H1 GM VIVA CD." },
  { codigo: "1417003-0", articulo: "PRI I H7H1 GM VIVA CD." },
  { codigo: "1426004-2", articulo: "PRI D H7H1 MM VW AMAROK CD RF" },
  { codigo: "1427004-2", articulo: "PRI I H7H1 MM VW AMAROK CD RF" },
  { codigo: "1428004-2", articulo: "PRI D H7H15 ME VW AMAROK CD RF" },
  { codigo: "1429004-2", articulo: "PRI I H7H15 ME VW AMAROK CD RF" },
  { codigo: "1500004-1", articulo: "PROYECTOR DER LED ME AMAROK PA2 FT" },
  { codigo: "1501004-1", articulo: "PROYECTOR IZQ LED ME AMAROK PA2 FT" }
];

// Catálogo especial para M2
const specialCatalogM2 = [
  { codigo: "1471000-0", articulo: "PRID I H7+H7 MM LL BAJA GAMA FI 359" },
  { codigo: "1472000-0", articulo: "PRID D H7+H7 MM LL ALTA GAMA FI 359" },
  { codigo: "1473000-0", articulo: "PRID I H7+H7 MM LL ALTA GAMA FI 359" },
  { codigo: "1504004-1", articulo: "PROYECTOR DER H7+H15 MM BAJA GAMA FCA X6S FT" },
  { codigo: "1505000-0", articulo: "PROYECTOR IZQ H7+H15 MM BAJA GAMA FCA X6S RF" },
  { codigo: "1505004-1", articulo: "PROYECTOR IZQ H7+H15 MM BAJA GAMA FCA X6S FT" },
  { codigo: "1506004-1", articulo: "PROYECTOR DER H7+H15 MM ALTA GAMA FCA X6S FT" },
  { codigo: "1507000-0", articulo: "PROYECTOR IZQ H7+H15 MM ALTA GAMA FCA X6S RF" },
  { codigo: "1507004-1", articulo: "PROYECTOR IZQ H7+H15 MM ALTA GAMA FCA X6S FT" },
  { codigo: "1508000-0", articulo: "PROYECTOR DER LED ME 359 MCA2 RF" },
  { codigo: "1509000-0", articulo: "PROYECTOR IZQ LED ME 359 MCA2 RF" },
  { codigo: "1510004-1", articulo: "PROYECTOR DER LED MM 359 MCA2 FT" },
  { codigo: "1510004-4", articulo: "PROYECTOR DER LED MM 359 MCA2 EXP" },
  { codigo: "1511004-1", articulo: "PROYECTOR IZQ LED MM 359 MCA2 FT" }
];

// Catálogo especial para M3
const specialCatalogM3 = [
  { codigo: "1450004-1", articulo: "PRI D H4 ME TO 640 C/DRL OK-52 FT CC" },
  { codigo: "1451004-1", articulo: "PRI I H4 ME TO 640 C/DRL OK-52 FT CC" },
  { codigo: "1469000-0", articulo: "PRID I H7+H1 MM EMB NEGRO CITROEN C4 LOUNGE" },
  { codigo: "1470000-0", articulo: "PRID D H7+H7 MM LL BAJA GAMA FI 359" },
  { codigo: "1472000-0", articulo: "PRID D H7+H7 MM LL ALTA GAMA FI 359" },
  { codigo: "1473000-0", articulo: "PRID I H7+H7 MM LL ALTA GAMA FI 359" },
  { codigo: "1476000-0", articulo: "PRI D H4 ME TO 640 C/DRL OK-52 DAKAR" },
  { codigo: "1477000-0", articulo: "PRI I H4 ME TO 640 C/DRL OK-52 DAKAR" },
  { codigo: "1488003-0", articulo: "PRID D H7+H1 MM LL C/LC PE 208 MR" },
  { codigo: "1489003-0", articulo: "PRID I H7+H1 MM LL C/LC PE 208 MR" },
  { codigo: "1490000-0", articulo: "PRID D H7+H1 MM LL S/LC PE 208 RF" },
  { codigo: "1490004-1", articulo: "PRY D H7+H1 MM LL S/LC PEUGEOT 208 FT" },
  { codigo: "1491000-0", articulo: "PRID I H7+H1 MM LL S/LC PE 208 RF" },
  { codigo: "1491004-1", articulo: "PRY I H7+H1 MM LL S/LC PEUGEOT 208 FT" },
  { codigo: "1504000-0", articulo: "PROYECTOR DER H7+H15 MM BAJA GAMA FCA X6S RF" },
  { codigo: "1504004-1", articulo: "PROYECTOR DER H7+H15 MM BAJA GAMA FCA X6S FT" },
  { codigo: "1505000-0", articulo: "PROYECTOR IZQ H7+H15 MM BAJA GAMA FCA X6S RF" },
  { codigo: "1505004-1", articulo: "PROYECTOR IZQ H7+H15 MM BAJA GAMA FCA X6S FT" },
  { codigo: "1506000-0", articulo: "PROYECTOR DER H7+H15 MM ALTA GAMA FCA X6S RF" },
  { codigo: "1506004-1", articulo: "PROYECTOR DER H7+H15 MM ALTA GAMA FCA X6S FT" },
  { codigo: "1507000-0", articulo: "PROYECTOR IZQ H7+H15 MM ALTA GAMA FCA X6S RF" },
  { codigo: "1507004-1", articulo: "PROYECTOR IZQ H7+H15 MM ALTA GAMA FCA X6S FT" }
];

// Catálogo especial para P10
const specialCatalogP10 = [
  { codigo: "1426704-2", articulo: "FT D P21/5 VW AMAROK C/MA RF" },
  { codigo: "1427704-2", articulo: "FT I P21/5W VW AMAROK C/RN RF" },
  { codigo: "1462704-2", articulo: "FT D P21/5 C/MA CUERPO NEGRO VW AMAROK RF" },
  { codigo: "1463704-2", articulo: "FT I P21/5W C/RN CUERPO NEGRO VW AMAROK RF" },
  { codigo: "1488700-0", articulo: "FARO TRASERO D P21/5 PE 208 RF" },
  { codigo: "1489700-0", articulo: "FARO TRASERO I P21/5 PE 208 RF" },
  { codigo: "1500704-1", articulo: "FARO TRASERO DER C/MA CUERPO NEGRO AMAROK PA2 FT" },
  { codigo: "1501704-1", articulo: "FARO TRASERO IZQ C/RN CUERPO NEGRO AMAROK PA2 FT" }
];

// Catálogo especial para P11
const specialCatalogP11 = [
  { codigo: "1470804-1", articulo: "FTB D W16W+LED FCA X6S FT" },
  { codigo: "1471804-1", articulo: "FTB I W16W+LED FCA X6S FT" }
];

// Catálogo especial para P12
const specialCatalogP12 = [
  { codigo: "1409710-0", articulo: "BO I P21/5-W5W FI 326 S/PORTALAMPARA" },
  { codigo: "1470704-1", articulo: "FTL D PY21W+LED FCA X6S FT" },
  { codigo: "1471704-1", articulo: "FTL I PY21W+LED FCA X6S FT" }
];

// Catálogo especial para P13
const specialCatalogP13 = [
  { codigo: "1448704-1", articulo: "FT D P21/5 W TO 640 C/MA FT" },
  { codigo: "1448710-0", articulo: "BO D P21/5-W5W TO 640 C/MA" },
  { codigo: "1449704-1", articulo: "FT I P21/5 W TO 640 C/RN FT" },
  { codigo: "1449710-0", articulo: "BO I P21/5 W TO 640 C/RN" },
  { codigo: "1451704-1", articulo: "FT IZQ P21/5 W TO 640 C/MA FT" },
  { codigo: "1476710-0", articulo: "BO D P21/5-W5W TO 640 C/MA DAKAR I" },
  { codigo: "1477710-0", articulo: "BO I P21/5 W TO 640 C/RN DAKAR I" },
  { codigo: "1500904-1", articulo: "GRILLA ILUMINADA LED AMAROK PA2 FT" }
];

let selectedGroup = 'inyeccion';
let selectedMachine = '';
let assignments = [];

function switchGroup(group) {
  selectedGroup = group;
  document.querySelectorAll('.switch-tab').forEach(tab => tab.classList.remove('active'));
  document.querySelector(`[data-group="${group}"]`).classList.add('active');

  const list = document.getElementById("machine-list");
  list.innerHTML = "";
  machineGroups[group].forEach(machine => {
    const li = document.createElement("li");
    li.textContent = machine;
    li.onclick = () => {
      selectedMachine = machine;
      document.getElementById("machine-title").textContent = `Asignar personas a ${machine}`;
      document.getElementById("assign-panel").style.display = 'flex';

      const ps = document.getElementById("product-select");
      ps.innerHTML = "";
      const listaArticulos =
        ["D10", "DT10", "DT5"].includes(machine) ? specialCatalog :
        ["D11", "DT9"].includes(machine) ? specialCatalogD11DT9 :
        ["D12"].includes(machine) ? specialCatalogD12 :
        ["D13", "DT13", "DT8"].includes(machine) ? specialCatalogD13DT13DT8 :
        ["D15", "DT6"].includes(machine) ? specialCatalogD15DT6 :
        ["D2", "DT6"].includes(machine) ? specialCatalogD2DT6 :
        ["D3"].includes(machine) ? specialCatalogD3 :
        ["D4"].includes(machine) ? specialCatalogD4 :
        ["D5"].includes(machine) ? specialCatalogD5 :
        ["D6"].includes(machine) ? specialCatalogD6 :
        ["D7","DT4"].includes(machine) ? specialCatalogD7DT4 :
        ["D8","DT7"].includes(machine) ? specialCatalogD8DT7 :
        ["D9"].includes(machine) ? specialCatalogD9 :
        ["M1"].includes(machine) ? specialCatalogM1 :
        ["M2"].includes(machine) ? specialCatalogM2 :
        ["M3"].includes(machine) ? specialCatalogM3 :
        ["P10"].includes(machine) ? specialCatalogP10 :
        ["P11"].includes(machine) ? specialCatalogP11 :
        ["P12"].includes(machine) ? specialCatalogP12 :
        ["P13"].includes(machine) ? specialCatalogP13 :
        catalog;

      listaArticulos.forEach(p => {
        const option = document.createElement("option");
        option.textContent = p.codigo ? `${p.codigo} - ${p.articulo}` : p.articulo;
        ps.appendChild(option);
      });

      renderPersonas();
    };
    list.appendChild(li);
  });
}

function renderPersonas() {
  const container = document.getElementById("person-checkboxes");
  container.innerHTML = "";
  ["Persona 1", "Persona 2", "Persona 3", "Persona 4"].forEach(p => {
    const label = document.createElement("label");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.value = p;
    label.appendChild(checkbox);
    label.appendChild(document.createTextNode(" " + p));
    container.appendChild(label);
  });
}

function asignar() {
  const turno = document.getElementById("shift-select").value;
  const personas = Array.from(document.querySelectorAll("#person-checkboxes input:checked")).map(cb => cb.value);
  const productSelect = document.getElementById("product-select");
  const articuloIndex = productSelect.selectedIndex;

  if (articuloIndex < 0) {
    alert("Selecciona un artículo válido.");
    return;
  }

  const listaArticulos =
    ["D10", "DT10", "DT5"].includes(selectedMachine) ? specialCatalog :
    ["D11", "DT9"].includes(selectedMachine) ? specialCatalogD11DT9 :
    ["D12"].includes(selectedMachine) ? specialCatalogD12 :
    ["D13", "DT13", "DT8"].includes(selectedMachine) ? specialCatalogD13DT13DT8 :
    ["D15", "DT6"].includes(selectedMachine) ? specialCatalogD15DT6 :
    ["D2", "DT6"].includes(selectedMachine) ? specialCatalogD2DT6 :
    ["D3"].includes(selectedMachine) ? specialCatalogD3 :
    ["D4"].includes(selectedMachine) ? specialCatalogD4 :
    ["D5"].includes(selectedMachine) ? specialCatalogD5 :
    ["D6"].includes(selectedMachine) ? specialCatalogD6 :
    ["D7","DT4"].includes(selectedMachine) ? specialCatalogD7DT4 :
    ["D8","DT7"].includes(selectedMachine) ? specialCatalogD8DT7 :
    ["D9"].includes(selectedMachine) ? specialCatalogD9 :
    ["M1"].includes(selectedMachine) ? specialCatalogM1 :
    ["M2"].includes(selectedMachine) ? specialCatalogM2 :
    ["M3"].includes(selectedMachine) ? specialCatalogM3 :
    ["P10"].includes(selectedMachine) ? specialCatalogP10 :
    ["P11"].includes(selectedMachine) ? specialCatalogP11 :
    ["P12"].includes(selectedMachine) ? specialCatalogP12 :
    ["P13"].includes(selectedMachine) ? specialCatalogP13 :
    specialCatalog;

  const producto = listaArticulos[articuloIndex];

  if (!selectedMachine || personas.length === 0 || !producto) {
    alert("Completa todos los campos.");
    return;
  }

  assignments.push({
    turno,
    zap: selectedMachine,
    personas,
    articulo: producto.articulo,
    codigo: producto.codigo || "",
    tipo: selectedGroup
  });

  renderTablas();
}

function renderTablas() {
  const tablas = {
    inyeccion: {
      "06:00 - 14:48": document.querySelector("#tabla-inyeccion-manana tbody"),
      "14:08 - 22:18": document.querySelector("#tabla-inyeccion-tarde tbody"),
      "22:10 - 06:10": document.querySelector("#tabla-inyeccion-noche tbody")
    },
    montaje: {
      "06:00 - 14:48": document.querySelector("#tabla-montaje-manana tbody"),
      "14:08 - 22:18": document.querySelector("#tabla-montaje-tarde tbody"),
      "22:10 - 06:10": document.querySelector("#tabla-montaje-noche tbody")
    }
  };

  Object.values(tablas.inyeccion).forEach(t => { if(t) t.innerHTML = ""; });
  Object.values(tablas.montaje).forEach(t => { if(t) t.innerHTML = ""; });

  assignments.forEach(({ tipo, turno, zap, personas, articulo, codigo }, index) => {
    const tipoKey = tipo.toLowerCase();
    const targetTable = tablas[tipoKey]?.[turno];
    if (!targetTable) return;

    const row = `<tr>
      <td>${zap}</td>
      <td>${personas.join(", ")}</td>
      <td>${codigo ? `${codigo} - ${articulo}` : articulo}</td>
      <td>${turno}</td>
      <td>
        <button onclick="editarAsignacion(${index})" aria-label="Editar asignación">Editar</button>
        <button onclick="borrarAsignacion(${index})" aria-label="Borrar asignación">Borrar</button>
      </td>
    </tr>`;
    targetTable.innerHTML += row;
  });
}

function editarAsignacion(index) {
  const asignacion = assignments[index];
  if (!asignacion) return;

  const modal = document.getElementById("edit-modal");
  modal.style.display = "flex";

  document.getElementById("edit-index").value = index;

  // Set turno en el select
  document.getElementById("edit-turno").value = asignacion.turno;

  // ZAP readonly
  document.getElementById("edit-zap").value = asignacion.zap;

  // Tipo readonly
  document.getElementById("edit-tipo").value = asignacion.tipo;

  // Personas: Generar checkbox con personas disponibles y marcar las que están asignadas
  const personasContainer = document.getElementById("edit-person-checkboxes");
  personasContainer.innerHTML = ""; // limpio

  const personasDisponibles = ["Persona 1", "Persona 2", "Persona 3", "Persona 4"]; // ajustá según las personas que tengas

  personasDisponibles.forEach(p => {
    const label = document.createElement("label");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.value = p;
    checkbox.checked = asignacion.personas.includes(p);
    label.appendChild(checkbox);
    label.appendChild(document.createTextNode(" " + p));
    personasContainer.appendChild(label);
  });

  // Artículos: llenar select con el catálogo correspondiente y seleccionar el que está asignado
  const productSelect = document.getElementById("edit-product-select");
  productSelect.innerHTML = "";

  // Usar la misma lógica que en switchGroup para elegir catálogo según asignacion.zap
  const listaArticulos =
    ["D10", "DT10", "DT5"].includes(asignacion.zap) ? specialCatalog :
    ["D11", "DT9"].includes(asignacion.zap) ? specialCatalogD11DT9 :
    ["D12"].includes(asignacion.zap) ? specialCatalogD12 :
    ["D13", "DT13", "DT8"].includes(asignacion.zap) ? specialCatalogD13DT13DT8 :
    ["D15", "DT6"].includes(asignacion.zap) ? specialCatalogD15DT6 :
    ["D2", "DT6"].includes(asignacion.zap) ? specialCatalogD2DT6 :
    ["D3"].includes(asignacion.zap) ? specialCatalogD3 :
    ["D4"].includes(asignacion.zap) ? specialCatalogD4 :
    ["D5"].includes(asignacion.zap) ? specialCatalogD5 :
    ["D6"].includes(asignacion.zap) ? specialCatalogD6 :
    ["D7","DT4"].includes(asignacion.zap) ? specialCatalogD7DT4 :
    ["D8","DT7"].includes(asignacion.zap) ? specialCatalogD8DT7 :
    ["D9"].includes(asignacion.zap) ? specialCatalogD9 :
    ["M1"].includes(asignacion.zap) ? specialCatalogM1 :
    ["M2"].includes(asignacion.zap) ? specialCatalogM2 :
    ["M3"].includes(asignacion.zap) ? specialCatalogM3 :
    ["P10"].includes(asignacion.zap) ? specialCatalogP10 :
    ["P11"].includes(asignacion.zap) ? specialCatalogP11 :
    ["P12"].includes(asignacion.zap) ? specialCatalogP12 :
    ["P13"].includes(asignacion.zap) ? specialCatalogP13 :
    specialCatalog;

  listaArticulos.forEach(p => {
    const option = document.createElement("option");
    option.textContent = p.codigo ? `${p.codigo} - ${p.articulo}` : p.articulo;
    option.value = p.articulo; // usá el nombre como value para comparar
    productSelect.appendChild(option);
  });

  // Selecciono el artículo que está asignado
  productSelect.value = asignacion.articulo;
}

function borrarAsignacion(index) {
  if (confirm("¿Seguro que querés borrar esta asignación?")) {
    assignments.splice(index, 1);
    renderTablas();
  }
}

function guardarEdicion() {
  const index = parseInt(document.getElementById("edit-index").value, 10);
  if (isNaN(index)) return;

  const turno = document.getElementById("edit-turno").value;
  const zap = document.getElementById("edit-zap").value;

  // Personas: leo los checkboxes
  const checkboxes = document.querySelectorAll("#edit-person-checkboxes input[type=checkbox]");
  const personas = Array.from(checkboxes)
    .filter(cb => cb.checked)
    .map(cb => cb.value);

  const productSelect = document.getElementById("edit-product-select");
  const articulo = productSelect.value;

  // Buscar el código del artículo seleccionado en el catálogo para ese zap
  const listaArticulos =
    ["D10", "DT10", "DT5"].includes(zap) ? specialCatalog :
    ["D11", "DT9"].includes(zap) ? specialCatalogD11DT9 :
    ["D12"].includes(zap) ? specialCatalogD12 :
    ["D13", "DT13", "DT8"].includes(zap) ? specialCatalogD13DT13DT8 :
    ["D15", "DT6"].includes(zap) ? specialCatalogD15DT6 :
    ["D2", "DT6"].includes(zap) ? specialCatalogD2DT6 :
    ["D3"].includes(zap) ? specialCatalogD3 :
    ["D4"].includes(zap) ? specialCatalogD4 :
    ["D5"].includes(zap) ? specialCatalogD5 :
    ["D6"].includes(zap) ? specialCatalogD6 :
    ["D7","DT4"].includes(zap) ? specialCatalogD7DT4 :
    ["D8","DT7"].includes(zap) ? specialCatalogD8DT7 :
    ["D9"].includes(zap) ? specialCatalogD9 :
    ["M1"].includes(zap) ? specialCatalogM1 :
    ["M2"].includes(zap) ? specialCatalogM2 :
    ["M3"].includes(zap) ? specialCatalogM3 :
    ["P10"].includes(zap) ? specialCatalogP10 :
    ["P11"].includes(zap) ? specialCatalogP11 :
    ["P12"].includes(zap) ? specialCatalogP12 :
    ["P13"].includes(zap) ? specialCatalogP13 :
    specialCatalog;

  const productoEncontrado = listaArticulos.find(p => p.articulo === articulo);

  if (!turno || !zap || personas.length === 0 || !articulo) {
    alert("Completa todos los campos del formulario.");
    return;
  }

  assignments[index] = {
    turno,
    zap,
    personas,
    articulo,
    codigo: productoEncontrado?.codigo || "",
    tipo: assignments[index].tipo // mantengo el tipo original
  };

  cerrarModal();
  renderTablas();
}

function cerrarModal() {
  document.getElementById("edit-modal").style.display = "none";
}


function descargarPDF() {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  const tipoActual = selectedGroup;
  const titulo = tipoActual === "inyeccion" ? "Asignaciones Inyección" : "Asignaciones Montaje";

  const data = assignments
    .filter(a => a.tipo === tipoActual)
    .map(a => [a.zap, a.personas.join(", "), a.articulo, a.turno]); // SOLO ARTÍCULO en PDF

  doc.text(titulo, 14, 20);
  doc.autoTable({
    head: [["ZAP", "Personas", "Artículo", "Turno"]],
    body: data,
    startY: 30
  });

  const nombre = document.getElementById("file-name").value || `asignaciones_${tipoActual}_${Date.now()}`;
  doc.save(`${nombre}.pdf`);
}

function limpiarTodo() {
  if (confirm("¿Borrar todas las asignaciones?")) {
    assignments = [];
    renderTablas();
  }
}

window.onload = () => {
  switchGroup('inyeccion');
};
