import {UserModelConfig} from "./config";
import {NewModel} from "../new/model";
import {LovePowerEnum, LovePowerEnumFromString, LovePowerEnumToString} from "../../enum/love_power/enum";


export class UserModel {
    constructor() {
        this.DocId = new UserModelConfig().generateDocId();
    }

    I000 = 0;
    // I001 = 0;
    // I002 = 0;
    // I003 = 0;
    // I004 = 0;
    // I005 = 0;
    // I006 = 0;
    // I007 = 0;
    // I008 = 0;
    // I009 = 0;
    // I010 = 0;
    // I011 = 0;
    // I013 = 0;
    // I014 = 0;
    // I015 = 0;
    // I016 = 0;
    // I017 = 0;
    // I018 = 0;
    // I019 = 0;
    // I020 = 0;
    // I021 = 0;
    // I022 = 0;
    // I023 = 0;
    // I024 = 0;
    // I025 = 0;
    // I026 = 0;
    // I027 = 0;
    // I028 = 0;
    // I029 = 0;
    // I030 = 0;
    // I031 = 0;
    // I032 = 0;
    // I033 = 0;
    // I034 = 0;
    // I035 = 0;
    // I036 = 0;
    // I037 = 0;
    // I038 = 0;
    // I039 = 0;
    // I040 = 0;
    // I041 = 0;
    // I042 = 0;
    // I043 = 0;
    // I044 = 0;
    // I045 = 0;
    // I046 = 0;
    // I047 = 0;
    // I048 = 0;
    // I049 = 0;
    // I050 = 0;
    // I051 = 0;
    // I052 = 0;
    // I053 = 0;
    // I054 = 0;
    // I055 = 0;
    // I056 = 0;
    // I057 = 0;
    // I058 = 0;
    // I059 = 0;
    // I060 = 0;
    // I061 = 0;
    // I062 = 0;
    // I063 = 0;
    // I064 = 0;
    // I065 = 0;
    // I066 = 0;
    // I067 = 0;
    // I068 = 0;
    // I069 = 0;
    // I070 = 0;
    // I071 = 0;
    // I072 = 0;
    // I073 = 0;
    // I074 = 0;
    // I075 = 0;
    // I076 = 0;
    // I077 = 0;
    // I078 = 0;
    // I079 = 0;
    // I080 = 0;
    // I081 = 0;
    // I082 = 0;
    // I083 = 0;
    // I084 = 0;
    // I085 = 0;
    // I086 = 0;
    // I087 = 0;
    // I088 = 0;
    // I089 = 0;
    // I090 = 0;
    // I091 = 0;
    // I092 = 0;
    // I093 = 0;
    // I094 = 0;
    // I095 = 0;
    // I096 = 0;
    // I097 = 0;
    // I098 = 0;
    // I099 = 0;
    //
    //
    S000 = "";
    // S001 = "";
    // S002 = "";
    // S003 = "";
    // S004 = "";
    // S005 = "";
    // S006 = "";
    // S007 = "";
    // S008 = "";
    // S009 = "";
    // S010 = "";
    // S011 = "";
    // S012 = "";
    // S013 = "";
    // S014 = "";
    // S015 = "";
    // S016 = "";
    // S017 = "";
    // S018 = "";
    // S019 = "";
    // S020 = "";
    // S021 = "";
    // S022 = "";
    // S023 = "";
    // S024 = "";
    // S025 = "";
    // S026 = "";
    // S027 = "";
    // S028 = "";
    // S029 = "";
    // S030 = "";
    // S031 = "";
    // S032 = "";
    // S033 = "";
    // S034 = "";
    // S035 = "";
    // S036 = "";
    // S037 = "";
    // S038 = "";
    // S039 = "";
    // S040 = "";
    // S041 = "";
    // S042 = "";
    // S043 = "";
    // S044 = "";
    // S045 = "";
    // S046 = "";
    // S047 = "";
    // S048 = "";
    // S049 = "";
    // S050 = "";
    // S051 = "";
    // S052 = "";
    // S053 = "";
    // S054 = "";
    // S055 = "";
    // S056 = "";
    // S057 = "";
    // S058 = "";
    // S059 = "";
    // S060 = "";
    // S061 = "";
    // S062 = "";
    // S063 = "";
    // S064 = "";
    // S065 = "";
    // S066 = "";
    // S067 = "";
    // S068 = "";
    // S069 = "";
    // S070 = "";
    // S071 = "";
    // S072 = "";
    // S073 = "";
    // S074 = "";
    // S075 = "";
    // S076 = "";
    // S077 = "";
    // S078 = "";
    // S079 = "";
    // S080 = "";
    // S081 = "";
    // S082 = "";
    // S083 = "";
    // S084 = "";
    // S085 = "";
    // S086 = "";
    // S087 = "";
    // S088 = "";
    // S089 = "";
    // S090 = "";
    // S091 = "";
    // S092 = "";
    // S093 = "";
    // S094 = "";
    // S095 = "";
    // S096 = "";
    // S097 = "";
    // S098 = "";
    // S099 = "";
    //
    B000 = false;
    // B001 = false;
    // B002 = false;
    // B003 = false;
    // B004 = false;
    // B005 = false;
    // B006 = false;
    // B007 = false;
    // B008 = false;
    // B009 = false;
    // B010 = false;
    // B011 = false;
    // B012 = false;
    // B013 = false;
    // B014 = false;
    // B015 = false;
    // B016 = false;
    // B017 = false;
    // B018 = false;
    // B019 = false;
    // B020 = false;
    // B021 = false;
    // B022 = false;
    // B023 = false;
    // B024 = false;
    // B025 = false;
    // B026 = false;
    // B027 = false;
    // B028 = false;
    // B029 = false;
    // B030 = false;

    R000 = 0;
    // R001 = 0;
    // R002 = 0;
    // R003 = 0;
    // R004 = 0;
    // R005 = 0;
    // R006 = 0;
    // R007 = 0;
    // R008 = 0;
    // R009 = 0;
    // R010 = 0;
    // R011 = 0;
    // R012 = 0;
    // R013 = 0;
    // R014 = 0;
    // R015 = 0;
    // R016 = 0;
    // R017 = 0;
    // R018 = 0;
    // R019 = 0;
    // R020 = 0;
    // R021 = 0;
    // R022 = 0;
    // R023 = 0;
    // R024 = 0;
    // R025 = 0;
    // R026 = 0;
    // R027 = 0;
    // R028 = 0;
    // R029 = 0;
    // R030 = 0;


    L000: string[] = [];
    // L001: string[] = [];
    // L002: string[] = [];
    // L003: string[] = [];
    // L004: string[] = [];
    // L005: string[] = [];
    // L006: string[] = [];
    // L007: string[] = [];
    // L008: string[] = [];
    // L009: string[] = [];
    // L010: string[] = [];
    // L011: string[] = [];
    // L012: string[] = [];
    // L013: string[] = [];
    // L014: string[] = [];
    // L015: string[] = [];
    // L016: string[] = [];
    // L017: string[] = [];
    // L018: string[] = [];
    // L019: string[] = [];
    // L020: string[] = [];

    C000: NewModel = new NewModel();
    // C001: NewModel = user NewModel();
    // C002: NewModel = user NewModel();
    // C003: NewModel = user NewModel();
    // C004: NewModel = user NewModel();
    // C005: NewModel = user NewModel();
    // C006: NewModel = user NewModel();
    // C007: NewModel = user NewModel();
    // C008: NewModel = user NewModel();
    // C009: NewModel = user NewModel();
    // C010: NewModel = user NewModel();
    // C011: NewModel = user NewModel();
    // C012: NewModel = user NewModel();
    // C013: NewModel = user NewModel();
    // C014: NewModel = user NewModel();
    // C015: NewModel = user NewModel();
    // C016: NewModel = user NewModel();
    // C017: NewModel = user NewModel();
    // C018: NewModel = user NewModel();
    // C019: NewModel = user NewModel();
    // C020: NewModel = user NewModel();

    J000: NewModel[] = [];
    // J001: NewModel[] = [];
    // J002: NewModel[] = [];
    // J003: NewModel[] = [];
    // J004: NewModel[] = [];
    // J005: NewModel[] = [];
    // J006: NewModel[] = [];
    // J007: NewModel[] = [];
    // J008: NewModel[] = [];
    // J009: NewModel[] = [];
    // J010: NewModel[] = [];
    // J011: NewModel[] = [];
    // J012: NewModel[] = [];
    // J013: NewModel[] = [];
    // J014: NewModel[] = [];
    // J015: NewModel[] = [];
    // J016: NewModel[] = [];
    // J017: NewModel[] = [];
    // J018: NewModel[] = [];
    // J019: NewModel[] = [];
    // J020: NewModel[] = [];


    E000: LovePowerEnum = LovePowerEnum.NotSelected;
    // E001: LovePowerEnum = LovePowerEnum.NotSelected;
    // E002: LovePowerEnum = LovePowerEnum.NotSelected;
    // E003: LovePowerEnum = LovePowerEnum.NotSelected;
    // E004: LovePowerEnum = LovePowerEnum.NotSelected;
    // E005: LovePowerEnum = LovePowerEnum.NotSelected;
    // E006: LovePowerEnum = LovePowerEnum.NotSelected;
    // E007: LovePowerEnum = LovePowerEnum.NotSelected;
    // E008: LovePowerEnum = LovePowerEnum.NotSelected;
    // E009: LovePowerEnum = LovePowerEnum.NotSelected;
    // E010: LovePowerEnum = LovePowerEnum.NotSelected;
    // E011: LovePowerEnum = LovePowerEnum.NotSelected;
    // E012: LovePowerEnum = LovePowerEnum.NotSelected;
    // E013: LovePowerEnum = LovePowerEnum.NotSelected;
    // E014: LovePowerEnum = LovePowerEnum.NotSelected;
    // E015: LovePowerEnum = LovePowerEnum.NotSelected;
    // E016: LovePowerEnum = LovePowerEnum.NotSelected;
    // E017: LovePowerEnum = LovePowerEnum.NotSelected;
    // E018: LovePowerEnum = LovePowerEnum.NotSelected;
    // E019: LovePowerEnum = LovePowerEnum.NotSelected;
    // E020: LovePowerEnum = LovePowerEnum.NotSelected;

    DocId = "";

    toString(): string {
        return JSON.stringify(
            {
                I000: this.I000,
                // I001: this.I001,
                // I002: this.I002,
                // I003: this.I003,
                // I004: this.I004,
                // I005: this.I005,
                // I006: this.I006,
                // I007: this.I007,
                // I008: this.I008,
                // I009: this.I009,
                // I010: this.I010,
                // I011: this.I011,
                // I012: this.I012,
                // I013: this.I013,
                // I014: this.I014,
                // I015: this.I015,
                // I016: this.I016,
                // I017: this.I017,
                // I018: this.I018,
                // I019: this.I019,
                // I020: this.I020,
                // I021: this.I021,
                // I022: this.I022,
                // I023: this.I023,
                // I024: this.I024,
                // I025: this.I025,
                // I026: this.I026,
                // I027: this.I027,
                // I028: this.I028,
                // I029: this.I029,
                // I030: this.I030,
                // I031: this.I031,
                // I032: this.I032,
                // I033: this.I033,
                // I034: this.I034,
                // I035: this.I035,
                // I036: this.I036,
                // I037: this.I037,
                // I038: this.I038,
                // I039: this.I039,
                // I040: this.I040,
                // I041: this.I041,
                // I042: this.I042,
                // I043: this.I043,
                // I044: this.I044,
                // I045: this.I045,
                // I046: this.I046,
                // I047: this.I047,
                // I048: this.I048,
                // I049: this.I049,
                // I050: this.I050,
                // I051: this.I051,
                // I052: this.I052,
                // I053: this.I053,
                // I054: this.I054,
                // I055: this.I055,
                // I056: this.I056,
                // I057: this.I057,
                // I058: this.I058,
                // I059: this.I059,
                // I060: this.I060,
                // I061: this.I061,
                // I062: this.I062,
                // I063: this.I063,
                // I064: this.I064,
                // I065: this.I065,
                // I066: this.I066,
                // I067: this.I067,
                // I068: this.I068,
                // I069: this.I069,
                // I070: this.I070,
                // I071: this.I071,
                // I072: this.I072,
                // I073: this.I073,
                // I074: this.I074,
                // I075: this.I075,
                // I076: this.I076,
                // I077: this.I077,
                // I078: this.I078,
                // I079: this.I079,
                // I080: this.I080,
                // I081: this.I081,
                // I082: this.I082,
                // I083: this.I083,
                // I084: this.I084,
                // I085: this.I085,
                // I086: this.I086,
                // I087: this.I087,
                // I088: this.I088,
                // I089: this.I089,
                // I090: this.I090,
                // I091: this.I091,
                // I092: this.I092,
                // I093: this.I093,
                // I094: this.I094,
                // I095: this.I095,
                // I096: this.I096,
                // I097: this.I097,
                // I098: this.I098,
                // I099: this.I099,
                S000: this.S000,
                // S001: this.S001,
                // S002: this.S002,
                // S003: this.S003,
                // S004: this.S004,
                // S005: this.S005,
                // S006: this.S006,
                // S007: this.S007,
                // S008: this.S008,
                // S009: this.S009,
                // S010: this.S010,
                // S011: this.S011,
                // S012: this.S012,
                // S013: this.S013,
                // S014: this.S014,
                // S015: this.S015,
                // S016: this.S016,
                // S017: this.S017,
                // S018: this.S018,
                // S019: this.S019,
                // S020: this.S020,
                // S021: this.S021,
                // S022: this.S022,
                // S023: this.S023,
                // S024: this.S024,
                // S025: this.S025,
                // S026: this.S026,
                // S027: this.S027,
                // S028: this.S028,
                // S029: this.S029,
                // S030: this.S030,
                // S031: this.S031,
                // S032: this.S032,
                // S033: this.S033,
                // S034: this.S034,
                // S035: this.S035,
                // S036: this.S036,
                // S037: this.S037,
                // S038: this.S038,
                // S039: this.S039,
                // S040: this.S040,
                // S041: this.S041,
                // S042: this.S042,
                // S043: this.S043,
                // S044: this.S044,
                // S045: this.S045,
                // S046: this.S046,
                // S047: this.S047,
                // S048: this.S048,
                // S049: this.S049,
                // S050: this.S050,
                // S051: this.S051,
                // S052: this.S052,
                // S053: this.S053,
                // S054: this.S054,
                // S055: this.S055,
                // S056: this.S056,
                // S057: this.S057,
                // S058: this.S058,
                // S059: this.S059,
                // S060: this.S060,
                // S061: this.S061,
                // S062: this.S062,
                // S063: this.S063,
                // S064: this.S064,
                // S065: this.S065,
                // S066: this.S066,
                // S067: this.S067,
                // S068: this.S068,
                // S069: this.S069,
                // S070: this.S070,
                // S071: this.S071,
                // S072: this.S072,
                // S073: this.S073,
                // S074: this.S074,
                // S075: this.S075,
                // S076: this.S076,
                // S077: this.S077,
                // S078: this.S078,
                // S079: this.S079,
                // S080: this.S080,
                // S081: this.S081,
                // S082: this.S082,
                // S083: this.S083,
                // S084: this.S084,
                // S085: this.S085,
                // S086: this.S086,
                // S087: this.S087,
                // S088: this.S088,
                // S089: this.S089,
                // S090: this.S090,
                // S091: this.S091,
                // S092: this.S092,
                // S093: this.S093,
                // S094: this.S094,
                // S095: this.S095,
                // S096: this.S096,
                // S097: this.S097,
                // S098: this.S098,
                // S099: this.S099,
                B000: this.B000,
                // B001: this.B001,
                // B002: this.B002,
                // B003: this.B003,
                // B004: this.B004,
                // B005: this.B005,
                // B006: this.B006,
                // B007: this.B007,
                // B008: this.B008,
                // B009: this.B009,
                // B010: this.B010,
                // B011: this.B011,
                // B012: this.B012,
                // B013: this.B013,
                // B014: this.B014,
                // B015: this.B015,
                // B016: this.B016,
                // B017: this.B017,
                // B018: this.B018,
                // B019: this.B019,
                // B020: this.B020,
                // B021: this.B021,
                // B022: this.B022,
                // B023: this.B023,
                // B024: this.B024,
                // B025: this.B025,
                // B026: this.B026,
                // B027: this.B027,
                // B028: this.B028,
                // B029: this.B029,
                // B030: this.B030,

                R000: this.R000,
                // R001 : this.R001,
                // R002 : this.R002,
                // R003 : this.R003,
                // R004 : this.R004,
                // R005 : this.R005,
                // R006 : this.R006,
                // R007 : this.R007,
                // R008 : this.R008,
                // R009 : this.R009,
                // R010 : this.R010,
                // R011 : this.R011,
                // R012 : this.R012,
                // R013 : this.R013,
                // R014 : this.R014,
                // R015 : this.R015,
                // R016 : this.R016,
                // R017 : this.R017,
                // R018 : this.R018,
                // R019 : this.R019,
                // R020 : this.R020,
                // R021 : this.R021,
                // R022 : this.R022,
                // R023 : this.R023,
                // R024 : this.R024,
                // R025 : this.R025,
                // R026 : this.R026,
                // R027 : this.R027,
                // R028 : this.R028,
                // R029 : this.R029,
                // R030 : this.R030,

                L000: this.L000,
                // L001: this.L001,
                // L002: this.L002,
                // L003: this.L003,
                // L004: this.L004,
                // L005: this.L005,
                // L006: this.L006,
                // L007: this.L007,
                // L008: this.L008,
                // L009: this.L009,
                // L010: this.L010,
                // L011: this.L011,
                // L012: this.L012,
                // L013: this.L013,
                // L014: this.L014,
                // L015: this.L015,
                // L016: this.L016,
                // L017: this.L017,
                // L018: this.L018,
                // L019: this.L019,
                // L020: this.L020,

                C000: this.C000.toString(),
                // C001: this.C001.toString(),
                // C002: this.C002.toString(),
                // C003: this.C003.toString(),
                // C004: this.C004.toString(),
                // C005: this.C005.toString(),
                // C006: this.C006.toString(),
                // C007: this.C007.toString(),
                // C008: this.C008.toString(),
                // C009: this.C009.toString(),
                // C010: this.C010.toString(),
                // C011: this.C011.toString(),
                // C012: this.C012.toString(),
                // C013: this.C013.toString(),
                // C014: this.C014.toString(),
                // C015: this.C015.toString(),
                // C016: this.C016.toString(),
                // C017: this.C017.toString(),
                // C018: this.C018.toString(),
                // C019: this.C019.toString(),
                // C020: this.C020.toString(),

                J000: this.J000.map((subModel) => subModel.toString()),
                // J001: this.J001.map((subModel) => subModel.toString()),
                // J002: this.J002.map((subModel) => subModel.toString()),
                // J003: this.J003.map((subModel) => subModel.toString()),
                // J004: this.J004.map((subModel) => subModel.toString()),
                // J005: this.J005.map((subModel) => subModel.toString()),
                // J006: this.J006.map((subModel) => subModel.toString()),
                // J007: this.J007.map((subModel) => subModel.toString()),
                // J008: this.J008.map((subModel) => subModel.toString()),
                // J009: this.J009.map((subModel) => subModel.toString()),
                // J010: this.J010.map((subModel) => subModel.toString()),
                // J011: this.J011.map((subModel) => subModel.toString()),
                // J012: this.J012.map((subModel) => subModel.toString()),
                // J013: this.J013.map((subModel) => subModel.toString()),
                // J014: this.J014.map((subModel) => subModel.toString()),
                // J015: this.J015.map((subModel) => subModel.toString()),
                // J016: this.J016.map((subModel) => subModel.toString()),
                // J017: this.J017.map((subModel) => subModel.toString()),
                // J018: this.J018.map((subModel) => subModel.toString()),
                // J019: this.J019.map((subModel) => subModel.toString()),
                // J020: this.J020.map((subModel) => subModel.toString()),

                E000: LovePowerEnumToString(this.E000),
                // E001: LovePowerEnumToString(this.E001),
                // E002: LovePowerEnumToString(this.E002),
                // E003: LovePowerEnumToString(this.E003),
                // E004: LovePowerEnumToString(this.E004),
                // E005: LovePowerEnumToString(this.E005),
                // E006: LovePowerEnumToString(this.E006),
                // E007: LovePowerEnumToString(this.E007),
                // E008: LovePowerEnumToString(this.E008),
                // E009: LovePowerEnumToString(this.E009),
                // E010: LovePowerEnumToString(this.E010),
                // E011: LovePowerEnumToString(this.E011),
                // E012: LovePowerEnumToString(this.E012),
                // E013: LovePowerEnumToString(this.E013),
                // E014: LovePowerEnumToString(this.E014),
                // E015: LovePowerEnumToString(this.E015),
                // E016: LovePowerEnumToString(this.E016),
                // E017: LovePowerEnumToString(this.E017),
                // E018: LovePowerEnumToString(this.E018),
                // E019: LovePowerEnumToString(this.E019),
                // E020: LovePowerEnumToString(this.E020),

                DocId: this.DocId,
            }
        );
    }

    static fromString(jsonString: any): UserModel {
        const data = (typeof jsonString === "string") ? JSON.parse(jsonString) : jsonString;

        const obj = new UserModel();

        obj.I000 = data["I000"] ?? 0;
        // obj.I001 = data["I001"] ?? 0;
        // obj.I002 = data["I002"] ?? 0;
        // obj.I003 = data["I003"] ?? 0;
        // obj.I004 = data["I004"] ?? 0;
        // obj.I005 = data["I005"] ?? 0;
        // obj.I006 = data["I006"] ?? 0;
        // obj.I007 = data["I007"] ?? 0;
        // obj.I008 = data["I008"] ?? 0;
        // obj.I009 = data["I009"] ?? 0;
        // obj.I010 = data["I010"] ?? 0;
        // obj.I011 = data["I011"] ?? 0;
        // obj.I012 = data["I012"] ?? 0;
        // obj.I013 = data["I013"] ?? 0;
        // obj.I014 = data["I014"] ?? 0;
        // obj.I015 = data["I015"] ?? 0;
        // obj.I016 = data["I016"] ?? 0;
        // obj.I017 = data["I017"] ?? 0;
        // obj.I018 = data["I018"] ?? 0;
        // obj.I019 = data["I019"] ?? 0;
        // obj.I020 = data["I020"] ?? 0;
        // obj.I021 = data["I021"] ?? 0;
        // obj.I022 = data["I022"] ?? 0;
        // obj.I023 = data["I023"] ?? 0;
        // obj.I024 = data["I024"] ?? 0;
        // obj.I025 = data["I025"] ?? 0;
        // obj.I026 = data["I026"] ?? 0;
        // obj.I027 = data["I027"] ?? 0;
        // obj.I028 = data["I028"] ?? 0;
        // obj.I029 = data["I029"] ?? 0;
        // obj.I030 = data["I030"] ?? 0;
        // obj.I031 = data["I031"] ?? 0;
        // obj.I032 = data["I032"] ?? 0;
        // obj.I033 = data["I033"] ?? 0;
        // obj.I034 = data["I034"] ?? 0;
        // obj.I035 = data["I035"] ?? 0;
        // obj.I036 = data["I036"] ?? 0;
        // obj.I037 = data["I037"] ?? 0;
        // obj.I038 = data["I038"] ?? 0;
        // obj.I039 = data["I039"] ?? 0;
        // obj.I040 = data["I040"] ?? 0;
        // obj.I041 = data["I041"] ?? 0;
        // obj.I042 = data["I042"] ?? 0;
        // obj.I043 = data["I043"] ?? 0;
        // obj.I044 = data["I044"] ?? 0;
        // obj.I045 = data["I045"] ?? 0;
        // obj.I046 = data["I046"] ?? 0;
        // obj.I047 = data["I047"] ?? 0;
        // obj.I048 = data["I048"] ?? 0;
        // obj.I049 = data["I049"] ?? 0;
        // obj.I050 = data["I050"] ?? 0;
        // obj.I051 = data["I051"] ?? 0;
        // obj.I052 = data["I052"] ?? 0;
        // obj.I053 = data["I053"] ?? 0;
        // obj.I054 = data["I054"] ?? 0;
        // obj.I055 = data["I055"] ?? 0;
        // obj.I056 = data["I056"] ?? 0;
        // obj.I057 = data["I057"] ?? 0;
        // obj.I058 = data["I058"] ?? 0;
        // obj.I059 = data["I059"] ?? 0;
        // obj.I060 = data["I060"] ?? 0;
        // obj.I061 = data["I061"] ?? 0;
        // obj.I062 = data["I062"] ?? 0;
        // obj.I063 = data["I063"] ?? 0;
        // obj.I064 = data["I064"] ?? 0;
        // obj.I065 = data["I065"] ?? 0;
        // obj.I066 = data["I066"] ?? 0;
        // obj.I067 = data["I067"] ?? 0;
        // obj.I068 = data["I068"] ?? 0;
        // obj.I069 = data["I069"] ?? 0;
        // obj.I070 = data["I070"] ?? 0;
        // obj.I071 = data["I071"] ?? 0;
        // obj.I072 = data["I072"] ?? 0;
        // obj.I073 = data["I073"] ?? 0;
        // obj.I074 = data["I074"] ?? 0;
        // obj.I075 = data["I075"] ?? 0;
        // obj.I076 = data["I076"] ?? 0;
        // obj.I077 = data["I077"] ?? 0;
        // obj.I078 = data["I078"] ?? 0;
        // obj.I079 = data["I079"] ?? 0;
        // obj.I080 = data["I080"] ?? 0;
        // obj.I081 = data["I081"] ?? 0;
        // obj.I082 = data["I082"] ?? 0;
        // obj.I083 = data["I083"] ?? 0;
        // obj.I084 = data["I084"] ?? 0;
        // obj.I085 = data["I085"] ?? 0;
        // obj.I086 = data["I086"] ?? 0;
        // obj.I087 = data["I087"] ?? 0;
        // obj.I088 = data["I088"] ?? 0;
        // obj.I089 = data["I089"] ?? 0;
        // obj.I090 = data["I090"] ?? 0;
        // obj.I091 = data["I091"] ?? 0;
        // obj.I092 = data["I092"] ?? 0;
        // obj.I093 = data["I093"] ?? 0;
        // obj.I094 = data["I094"] ?? 0;
        // obj.I095 = data["I095"] ?? 0;
        // obj.I096 = data["I096"] ?? 0;
        // obj.I097 = data["I097"] ?? 0;
        // obj.I098 = data["I098"] ?? 0;
        // obj.I099 = data["I099"] ?? 0;
        //
        obj.S000 = data["S000"] ?? "";
        // obj.S001 = data["S001"] ?? "";
        // obj.S002 = data["S002"] ?? "";
        // obj.S003 = data["S003"] ?? "";
        // obj.S004 = data["S004"] ?? "";
        // obj.S005 = data["S005"] ?? "";
        // obj.S006 = data["S006"] ?? "";
        // obj.S007 = data["S007"] ?? "";
        // obj.S008 = data["S008"] ?? "";
        // obj.S009 = data["S009"] ?? "";
        // obj.S010 = data["S010"] ?? "";
        // obj.S011 = data["S011"] ?? "";
        // obj.S012 = data["S012"] ?? "";
        // obj.S013 = data["S013"] ?? "";
        // obj.S014 = data["S014"] ?? "";
        // obj.S015 = data["S015"] ?? "";
        // obj.S016 = data["S016"] ?? "";
        // obj.S017 = data["S017"] ?? "";
        // obj.S018 = data["S018"] ?? "";
        // obj.S019 = data["S019"] ?? "";
        // obj.S020 = data["S020"] ?? "";
        // obj.S021 = data["S021"] ?? "";
        // obj.S022 = data["S022"] ?? "";
        // obj.S023 = data["S023"] ?? "";
        // obj.S024 = data["S024"] ?? "";
        // obj.S025 = data["S025"] ?? "";
        // obj.S026 = data["S026"] ?? "";
        // obj.S027 = data["S027"] ?? "";
        // obj.S028 = data["S028"] ?? "";
        // obj.S029 = data["S029"] ?? "";
        // obj.S030 = data["S030"] ?? "";
        // obj.S031 = data["S031"] ?? "";
        // obj.S032 = data["S032"] ?? "";
        // obj.S033 = data["S033"] ?? "";
        // obj.S034 = data["S034"] ?? "";
        // obj.S035 = data["S035"] ?? "";
        // obj.S036 = data["S036"] ?? "";
        // obj.S037 = data["S037"] ?? "";
        // obj.S038 = data["S038"] ?? "";
        // obj.S039 = data["S039"] ?? "";
        // obj.S040 = data["S040"] ?? "";
        // obj.S041 = data["S041"] ?? "";
        // obj.S042 = data["S042"] ?? "";
        // obj.S043 = data["S043"] ?? "";
        // obj.S044 = data["S044"] ?? "";
        // obj.S045 = data["S045"] ?? "";
        // obj.S046 = data["S046"] ?? "";
        // obj.S047 = data["S047"] ?? "";
        // obj.S048 = data["S048"] ?? "";
        // obj.S049 = data["S049"] ?? "";
        // obj.S050 = data["S050"] ?? "";
        // obj.S051 = data["S051"] ?? "";
        // obj.S052 = data["S052"] ?? "";
        // obj.S053 = data["S053"] ?? "";
        // obj.S054 = data["S054"] ?? "";
        // obj.S055 = data["S055"] ?? "";
        // obj.S056 = data["S056"] ?? "";
        // obj.S057 = data["S057"] ?? "";
        // obj.S058 = data["S058"] ?? "";
        // obj.S059 = data["S059"] ?? "";
        // obj.S060 = data["S060"] ?? "";
        // obj.S061 = data["S061"] ?? "";
        // obj.S062 = data["S062"] ?? "";
        // obj.S063 = data["S063"] ?? "";
        // obj.S064 = data["S064"] ?? "";
        // obj.S065 = data["S065"] ?? "";
        // obj.S066 = data["S066"] ?? "";
        // obj.S067 = data["S067"] ?? "";
        // obj.S068 = data["S068"] ?? "";
        // obj.S069 = data["S069"] ?? "";
        // obj.S070 = data["S070"] ?? "";
        // obj.S071 = data["S071"] ?? "";
        // obj.S072 = data["S072"] ?? "";
        // obj.S073 = data["S073"] ?? "";
        // obj.S074 = data["S074"] ?? "";
        // obj.S075 = data["S075"] ?? "";
        // obj.S076 = data["S076"] ?? "";
        // obj.S077 = data["S077"] ?? "";
        // obj.S078 = data["S078"] ?? "";
        // obj.S079 = data["S079"] ?? "";
        // obj.S080 = data["S080"] ?? "";
        // obj.S081 = data["S081"] ?? "";
        // obj.S082 = data["S082"] ?? "";
        // obj.S083 = data["S083"] ?? "";
        // obj.S084 = data["S084"] ?? "";
        // obj.S085 = data["S085"] ?? "";
        // obj.S086 = data["S086"] ?? "";
        // obj.S087 = data["S087"] ?? "";
        // obj.S088 = data["S088"] ?? "";
        // obj.S089 = data["S089"] ?? "";
        // obj.S090 = data["S090"] ?? "";
        // obj.S091 = data["S091"] ?? "";
        // obj.S092 = data["S092"] ?? "";
        // obj.S093 = data["S093"] ?? "";
        // obj.S094 = data["S094"] ?? "";
        // obj.S095 = data["S095"] ?? "";
        // obj.S096 = data["S096"] ?? "";
        // obj.S097 = data["S097"] ?? "";
        // obj.S098 = data["S098"] ?? "";
        // obj.S099 = data["S099"] ?? "";
        //
        obj.B000 = data["B000"] ?? false;
        // obj.B001 = data["B001"] ?? false;
        // obj.B002 = data["B002"] ?? false;
        // obj.B003 = data["B003"] ?? false;
        // obj.B004 = data["B004"] ?? false;
        // obj.B005 = data["B005"] ?? false;
        // obj.B006 = data["B006"] ?? false;
        // obj.B007 = data["B007"] ?? false;
        // obj.B008 = data["B008"] ?? false;
        // obj.B009 = data["B009"] ?? false;
        // obj.B010 = data["B010"] ?? false;
        // obj.B011 = data["B011"] ?? false;
        // obj.B012 = data["B012"] ?? false;
        // obj.B013 = data["B013"] ?? false;
        // obj.B014 = data["B014"] ?? false;
        // obj.B015 = data["B015"] ?? false;
        // obj.B016 = data["B016"] ?? false;
        // obj.B017 = data["B017"] ?? false;
        // obj.B018 = data["B018"] ?? false;
        // obj.B019 = data["B019"] ?? false;
        // obj.B020 = data["B020"] ?? false;
        // obj.B021 = data["B021"] ?? false;
        // obj.B022 = data["B022"] ?? false;
        // obj.B023 = data["B023"] ?? false;
        // obj.B024 = data["B024"] ?? false;
        // obj.B025 = data["B025"] ?? false;
        // obj.B026 = data["B026"] ?? false;
        // obj.B027 = data["B027"] ?? false;
        // obj.B028 = data["B028"] ?? false;
        // obj.B029 = data["B029"] ?? false;
        // obj.B030 = data["B030"] ?? false;

        obj.R000 = data["R000"] ?? 0;
        // obj.R001 = data["R001"] ?? 0;
        // obj.R002 = data["R002"] ?? 0;
        // obj.R003 = data["R003"] ?? 0;
        // obj.R004 = data["R004"] ?? 0;
        // obj.R005 = data["R005"] ?? 0;
        // obj.R006 = data["R006"] ?? 0;
        // obj.R007 = data["R007"] ?? 0;
        // obj.R008 = data["R008"] ?? 0;
        // obj.R009 = data["R009"] ?? 0;
        // obj.R010 = data["R010"] ?? 0;
        // obj.R011 = data["R011"] ?? 0;
        // obj.R012 = data["R012"] ?? 0;
        // obj.R013 = data["R013"] ?? 0;
        // obj.R014 = data["R014"] ?? 0;
        // obj.R015 = data["R015"] ?? 0;
        // obj.R016 = data["R016"] ?? 0;
        // obj.R017 = data["R017"] ?? 0;
        // obj.R018 = data["R018"] ?? 0;
        // obj.R019 = data["R019"] ?? 0;
        // obj.R020 = data["R020"] ?? 0;
        // obj.R021 = data["R021"] ?? 0;
        // obj.R022 = data["R022"] ?? 0;
        // obj.R023 = data["R023"] ?? 0;
        // obj.R024 = data["R024"] ?? 0;
        // obj.R025 = data["R025"] ?? 0;
        // obj.R026 = data["R026"] ?? 0;
        // obj.R027 = data["R027"] ?? 0;
        // obj.R028 = data["R028"] ?? 0;
        // obj.R029 = data["R029"] ?? 0;
        // obj.R030 = data["R030"] ?? 0;

        obj.L000 = data["L000"] ?? [];
        // obj.L001 = data["L001"] ?? [];
        // obj.L002 = data["L002"] ?? [];
        // obj.L003 = data["L003"] ?? [];
        // obj.L004 = data["L004"] ?? [];
        // obj.L005 = data["L005"] ?? [];
        // obj.L006 = data["L006"] ?? [];
        // obj.L007 = data["L007"] ?? [];
        // obj.L008 = data["L008"] ?? [];
        // obj.L009 = data["L009"] ?? [];
        // obj.L010 = data["L010"] ?? [];
        // obj.L011 = data["L011"] ?? [];
        // obj.L012 = data["L012"] ?? [];
        // obj.L013 = data["L013"] ?? [];
        // obj.L014 = data["L014"] ?? [];
        // obj.L015 = data["L015"] ?? [];
        // obj.L016 = data["L016"] ?? [];
        // obj.L017 = data["L017"] ?? [];
        // obj.L018 = data["L018"] ?? [];
        // obj.L019 = data["L019"] ?? [];
        // obj.L020 = data["L020"] ?? [];

        obj.C000 = NewModel.fromString(data["C000"] ?? new NewModel().toString());
        // obj.C001 = NewModel.fromString(data["C001"] ?? user NewModel().toString());
        // obj.C002 = NewModel.fromString(data["C002"] ?? user NewModel().toString());
        // obj.C003 = NewModel.fromString(data["C003"] ?? user NewModel().toString());
        // obj.C004 = NewModel.fromString(data["C004"] ?? user NewModel().toString());
        // obj.C005 = NewModel.fromString(data["C005"] ?? user NewModel().toString());
        // obj.C006 = NewModel.fromString(data["C006"] ?? user NewModel().toString());
        // obj.C007 = NewModel.fromString(data["C007"] ?? user NewModel().toString());
        // obj.C008 = NewModel.fromString(data["C008"] ?? user NewModel().toString());
        // obj.C009 = NewModel.fromString(data["C009"] ?? user NewModel().toString());
        // obj.C010 = NewModel.fromString(data["C010"] ?? user NewModel().toString());
        // obj.C011 = NewModel.fromString(data["C011"] ?? user NewModel().toString());
        // obj.C012 = NewModel.fromString(data["C012"] ?? user NewModel().toString());
        // obj.C013 = NewModel.fromString(data["C013"] ?? user NewModel().toString());
        // obj.C014 = NewModel.fromString(data["C014"] ?? user NewModel().toString());
        // obj.C015 = NewModel.fromString(data["C015"] ?? user NewModel().toString());
        // obj.C016 = NewModel.fromString(data["C016"] ?? user NewModel().toString());
        // obj.C017 = NewModel.fromString(data["C017"] ?? user NewModel().toString());
        // obj.C018 = NewModel.fromString(data["C018"] ?? user NewModel().toString());
        // obj.C019 = NewModel.fromString(data["C019"] ?? user NewModel().toString());
        // obj.C020 = NewModel.fromString(data["C020"] ?? user NewModel().toString());

        obj.J000 = ((typeof (data["J000"] ?? "[]") === "string") ? JSON.parse(data["J000"]) : data["J000"]).map(NewModel.fromString);
        // obj.J001 = ((typeof (data["J001"] ?? "[]") === "string") ? JSON.parse(data["J001"]) : data["J001"]).map(NewModel.fromString);
        // obj.J002 = ((typeof (data["J002"] ?? "[]") === "string") ? JSON.parse(data["J002"]) : data["J002"]).map(NewModel.fromString);
        // obj.J003 = ((typeof (data["J003"] ?? "[]") === "string") ? JSON.parse(data["J003"]) : data["J003"]).map(NewModel.fromString);
        // obj.J004 = ((typeof (data["J004"] ?? "[]") === "string") ? JSON.parse(data["J004"]) : data["J004"]).map(NewModel.fromString);
        // obj.J005 = ((typeof (data["J005"] ?? "[]") === "string") ? JSON.parse(data["J005"]) : data["J005"]).map(NewModel.fromString);
        // obj.J006 = ((typeof (data["J006"] ?? "[]") === "string") ? JSON.parse(data["J006"]) : data["J006"]).map(NewModel.fromString);
        // obj.J007 = ((typeof (data["J007"] ?? "[]") === "string") ? JSON.parse(data["J007"]) : data["J007"]).map(NewModel.fromString);
        // obj.J008 = ((typeof (data["J008"] ?? "[]") === "string") ? JSON.parse(data["J008"]) : data["J008"]).map(NewModel.fromString);
        // obj.J009 = ((typeof (data["J009"] ?? "[]") === "string") ? JSON.parse(data["J009"]) : data["J009"]).map(NewModel.fromString);
        // obj.J010 = ((typeof (data["J010"] ?? "[]") === "string") ? JSON.parse(data["J010"]) : data["J010"]).map(NewModel.fromString);
        // obj.J011 = ((typeof (data["J011"] ?? "[]") === "string") ? JSON.parse(data["J011"]) : data["J011"]).map(NewModel.fromString);
        // obj.J012 = ((typeof (data["J012"] ?? "[]") === "string") ? JSON.parse(data["J012"]) : data["J012"]).map(NewModel.fromString);
        // obj.J013 = ((typeof (data["J013"] ?? "[]") === "string") ? JSON.parse(data["J013"]) : data["J013"]).map(NewModel.fromString);
        // obj.J014 = ((typeof (data["J014"] ?? "[]") === "string") ? JSON.parse(data["J014"]) : data["J014"]).map(NewModel.fromString);
        // obj.J015 = ((typeof (data["J015"] ?? "[]") === "string") ? JSON.parse(data["J015"]) : data["J015"]).map(NewModel.fromString);
        // obj.J016 = ((typeof (data["J016"] ?? "[]") === "string") ? JSON.parse(data["J016"]) : data["J016"]).map(NewModel.fromString);
        // obj.J017 = ((typeof (data["J017"] ?? "[]") === "string") ? JSON.parse(data["J017"]) : data["J017"]).map(NewModel.fromString);
        // obj.J018 = ((typeof (data["J018"] ?? "[]") === "string") ? JSON.parse(data["J018"]) : data["J018"]).map(NewModel.fromString);
        // obj.J019 = ((typeof (data["J019"] ?? "[]") === "string") ? JSON.parse(data["J019"]) : data["J019"]).map(NewModel.fromString);
        // obj.J020 = ((typeof (data["J020"] ?? "[]") === "string") ? JSON.parse(data["J020"]) : data["J020"]).map(NewModel.fromString);

        obj.E000 = LovePowerEnumFromString(data["E000"] ?? "NotSelected");
        // obj.E001 = LovePowerEnumFromString(data["E001"] ?? "NotSelected");
        // obj.E002 = LovePowerEnumFromString(data["E002"] ?? "NotSelected");
        // obj.E003 = LovePowerEnumFromString(data["E003"] ?? "NotSelected");
        // obj.E004 = LovePowerEnumFromString(data["E004"] ?? "NotSelected");
        // obj.E005 = LovePowerEnumFromString(data["E005"] ?? "NotSelected");
        // obj.E006 = LovePowerEnumFromString(data["E006"] ?? "NotSelected");
        // obj.E007 = LovePowerEnumFromString(data["E007"] ?? "NotSelected");
        // obj.E008 = LovePowerEnumFromString(data["E008"] ?? "NotSelected");
        // obj.E009 = LovePowerEnumFromString(data["E009"] ?? "NotSelected");
        // obj.E010 = LovePowerEnumFromString(data["E010"] ?? "NotSelected");
        // obj.E011 = LovePowerEnumFromString(data["E011"] ?? "NotSelected");
        // obj.E012 = LovePowerEnumFromString(data["E012"] ?? "NotSelected");
        // obj.E013 = LovePowerEnumFromString(data["E013"] ?? "NotSelected");
        // obj.E014 = LovePowerEnumFromString(data["E014"] ?? "NotSelected");
        // obj.E015 = LovePowerEnumFromString(data["E015"] ?? "NotSelected");
        // obj.E016 = LovePowerEnumFromString(data["E016"] ?? "NotSelected");
        // obj.E017 = LovePowerEnumFromString(data["E017"] ?? "NotSelected");
        // obj.E018 = LovePowerEnumFromString(data["E018"] ?? "NotSelected");
        // obj.E019 = LovePowerEnumFromString(data["E019"] ?? "NotSelected");
        // obj.E020 = LovePowerEnumFromString(data["E020"] ?? "NotSelected");

        if (data["DocId"] != null) {
            obj.DocId = data["DocId"];
        }

        return obj;
    }
}
