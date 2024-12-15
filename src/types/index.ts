
// ./types/index.ts
export interface ItemType {
    finalFileName: string;
    interfaceName: string;
    interfaceTsFile: string;
}

export type ColumnTypes = "pk" | "fk" | "created_at" | "updated_at" | "deleted_at" | "slug" | "order" | "bit" | "int" | "integer" | "tinyint" | "smallint" | "mediumint" | "bigint" | "float" | "double" | "double precision" | "decimal" | "numeric" | "fixed" | "bool" | "boolean" | "date" | "datetime" | "timestamp" | "time" | "year" | "char" | "nchar" | "varchar" | "nvarchar" | "text" | "blob" | "json" | "binary" | "varbinary" | "geometry" | "point" | "linestring" | "polygon" | "uuid" | "inet" | "macaddr" | "money" | "character varying" | "citext" | "hstore" | "bytea" | "timetz" | "timestamptz" | "interval" | "tsvector" | "tsquery" | "xml" | "jsonb" | "int4range" | "int8range" | "numrange" | "tsrange" | "tstzrange" | "daterange" | "geography" | "cube" | "ltree" | "enum"

export type OnDeleteTypes = "CASCADE" | "SET NULL" | "NO ACTION" | "RESTRICT"

export type OnUpdateTypes = "CASCADE" | "SET NULL" | "NO ACTION" | "RESTRICT"

export type FieldTypes = "richtext" | "color" | "text" | "file" | "password" | "radio" | "checkbox" | "range" | "select" | "combobox" | "multiselect" | "datepicker" | "sheetpicker" | "switch" | "switchlist"

export type GenerationStrategyType = "uuid" | "increment"

export type GeneratedType = "VIRTUAL" | "STORED";

export type MethodType = "GET" | "POST" | "PATCH" | "DELETE"

export type CountryCodeType = "AFG" | "ALB" | "DZA" | "AND" | "AGO" | "ATG" | "ARG" | "ARM" | "AUS" | "AUT"
    | "AZE" | "BHS" | "BHR" | "BGD" | "BRB" | "BLR" | "BEL" | "BLZ" | "BEN" | "BTN"
    | "BOL" | "BIH" | "BWA" | "BRA" | "BRN" | "BGR" | "BFA" | "BDI" | "CPV" | "KHM"
    | "CMR" | "CAN" | "CAF" | "TCD" | "CHL" | "CHN" | "COL" | "COM" | "COG" | "COD"
    | "CRI" | "CIV" | "HRV" | "CUB" | "CYP" | "CZE" | "DNK" | "DJI" | "DMA" | "DOM"
    | "ECU" | "EGY" | "SLV" | "GNQ" | "ERI" | "EST" | "SWZ" | "ETH" | "FJI" | "FIN"
    | "FRA" | "GAB" | "GMB" | "GEO" | "DEU" | "GHA" | "GRC" | "GRD" | "GTM" | "GIN"
    | "GNB" | "GUY" | "HTI" | "HND" | "HUN" | "ISL" | "IND" | "IDN" | "IRN" | "IRQ"
    | "IRL" | "ISR" | "ITA" | "JAM" | "JPN" | "JOR" | "KAZ" | "KEN" | "KIR" | "PRK"
    | "KOR" | "KWT" | "KGZ" | "LAO" | "LVA" | "LBN" | "LSO" | "LBR" | "LBY" | "LIE"
    | "LTU" | "LUX" | "MDG" | "MWI" | "MYS" | "MDV" | "MLI" | "MLT" | "MHL" | "MRT"
    | "MUS" | "MEX" | "FSM" | "MDA" | "MCO" | "MNG" | "MNE" | "MAR" | "MOZ" | "MMR"
    | "NAM" | "NRU" | "NPL" | "NLD" | "NZL" | "NIC" | "NER" | "NGA" | "MKD" | "NOR"
    | "OMN" | "PAK" | "PLW" | "PAN" | "PNG" | "PRY" | "PER" | "PHL" | "POL" | "PRT"
    | "QAT" | "ROU" | "RUS" | "RWA" | "KNA" | "LCA" | "VCT" | "WSM" | "SMR" | "STP"
    | "SAU" | "SEN" | "SRB" | "SYC" | "SLE" | "SGP" | "SVK" | "SVN" | "SLB" | "SOM"
    | "ZAF" | "SSD" | "ESP" | "LKA" | "SDN" | "SUR" | "SWE" | "CHE" | "SYR" | "TJK"
    | "TZA" | "THA" | "TLS" | "TGO" | "TON" | "TTO" | "TUN" | "TUR" | "TKM" | "TUV"
    | "UGA" | "UKR" | "ARE" | "GBR" | "USA" | "URY" | "UZB" | "VUT" | "VAT" | "VEN"
    | "VNM" | "YEM" | "ZMB" | "ZWE"

export type RegionType = "AF" | "AL" | "DZ" | "AS" | "AD" | "AO" | "AI" | "AQ" | "AG" | "AR"
    | "AM" | "AW" | "AU" | "AT" | "AZ" | "BS" | "BH" | "BD" | "BB" | "BY"
    | "BE" | "BZ" | "BJ" | "BM" | "BT" | "BO" | "BA" | "BW" | "BV" | "BR"
    | "IO" | "BN" | "BG" | "BF" | "BI" | "KH" | "CM" | "CA" | "CV" | "KY"
    | "CF" | "TD" | "CL" | "CN" | "CX" | "CC" | "CO" | "KM" | "CG" | "CD"
    | "CK" | "CR" | "CI" | "HR" | "CU" | "CY" | "CZ" | "DK" | "DJ" | "DM"
    | "DO" | "EC" | "EG" | "SV" | "GQ" | "ER" | "EE" | "SZ" | "ET" | "FK"
    | "FO" | "FJ" | "FI" | "FR" | "GF" | "PF" | "TF" | "GA" | "GM" | "GE"
    | "DE" | "GH" | "GI" | "GR" | "GL" | "GD" | "GP" | "GU" | "GT" | "GG"
    | "GN" | "GW" | "GY" | "HT" | "HM" | "VA" | "HN" | "HK" | "HU" | "IS"
    | "IN" | "ID" | "IR" | "IQ" | "IE" | "IM" | "IL" | "IT" | "JM" | "JP"
    | "JE" | "JO" | "KZ" | "KE" | "KI" | "KP" | "KR" | "KW" | "KG" | "LA"
    | "LV" | "LB" | "LS" | "LR" | "LY" | "LI" | "LT" | "LU" | "MO" | "MG"
    | "MW" | "MY" | "MV" | "ML" | "MT" | "MH" | "MQ" | "MR" | "MU" | "YT"
    | "MX" | "FM" | "MD" | "MC" | "MN" | "ME" | "MS" | "MA" | "MZ" | "MM"
    | "NA" | "NR" | "NP" | "NL" | "NC" | "NZ" | "NI" | "NE" | "NG" | "NU"
    | "NF" | "MP" | "NO" | "OM" | "PK" | "PW" | "PS" | "PA" | "PG" | "PY"
    | "PE" | "PH" | "PN" | "PL" | "PT" | "PR" | "QA" | "MK" | "RO" | "RU"
    | "RW" | "RE" | "BL" | "SH" | "KN" | "LC" | "MF" | "PM" | "VC" | "WS"
    | "SM" | "ST" | "SA" | "SN" | "RS" | "SC" | "SL" | "SG" | "SX" | "SK"
    | "SI" | "SB" | "SO" | "ZA" | "GS" | "SS" | "ES" | "LK" | "SD" | "SR"
    | "SE" | "CH" | "SY" | "TW" | "TJ" | "TZ" | "TH" | "TL" | "TG" | "TK"
    | "TO" | "TT" | "TN" | "TR" | "TM" | "TC" | "TV" | "UG" | "UA" | "AE"
    | "GB" | "US" | "UM" | "UY" | "UZ" | "VU" | "VE" | "VN" | "VG" | "VI"
    | "WF" | "EH" | "YE" | "ZM" | "ZW";


export type LocaleCodesType = "aa" | "ab" | "ae" | "af" | "ak" | "am" | "an" | "ar" | "as" | "av" | "ay" | "az"
    | "ba" | "be" | "bg" | "bh" | "bi" | "bm" | "bn" | "bo" | "br" | "bs" | "ca" | "ce"
    | "ch" | "co" | "cr" | "cs" | "cu" | "cv" | "cy" | "da" | "de" | "dv" | "dz" | "ee"
    | "el" | "en" | "eo" | "es" | "et" | "eu" | "fa" | "ff" | "fi" | "fj" | "fo" | "fr"
    | "fy" | "ga" | "gd" | "gl" | "gn" | "gu" | "gv" | "ha" | "he" | "hi" | "ho" | "hr"
    | "ht" | "hu" | "hy" | "hz" | "ia" | "id" | "ie" | "ig" | "ii" | "ik" | "io" | "is"
    | "it" | "iu" | "ja" | "jv" | "ka" | "kg" | "ki" | "kj" | "kk" | "kl" | "km" | "kn"
    | "ko" | "kr" | "ks" | "ku" | "kv" | "kw" | "ky" | "la" | "lb" | "lg" | "li" | "ln"
    | "lo" | "lt" | "lu" | "lv" | "mg" | "mh" | "mi" | "mk" | "ml" | "mn" | "mr" | "ms"
    | "mt" | "my" | "na" | "nb" | "nd" | "ne" | "ng" | "nl" | "nn" | "no" | "nr" | "nv"
    | "ny" | "oc" | "oj" | "om" | "or" | "os" | "pa" | "pi" | "pl" | "ps" | "pt" | "qu"
    | "rm" | "rn" | "ro" | "ru" | "rw" | "sa" | "sc" | "sd" | "se" | "sg" | "si" | "sk"
    | "sl" | "sm" | "sn" | "so" | "sq" | "sr" | "ss" | "st" | "su" | "sv" | "sw" | "ta"
    | "te" | "tg" | "th" | "ti" | "tk" | "tl" | "tn" | "to" | "tr" | "ts" | "tt" | "tw"
    | "ty" | "ug" | "uk" | "ur" | "uz" | "ve" | "vi" | "vo" | "wa" | "wo" | "xh" | "yi"
    | "yo" | "za" | "zh" | "zu";