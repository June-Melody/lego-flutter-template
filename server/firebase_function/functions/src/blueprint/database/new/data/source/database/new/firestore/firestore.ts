import {firestoreDb} from "../../../../../../../../index";
import {NewModel} from "../../../../../domain/entity/model/new/model";


export class NewModelFirestore {
    // 위치 설정해주기
    collectionPath() {
        return firestoreDb
            .collection("NewModel");
    }

    async get(docId: string): Promise<NewModel | null> {
        try {
            const document = await this.collectionPath()
                .doc(docId)
                .get();

            return this.fromMap(document.data());
        } catch (e) {
            console.log(e);
            return null;
        }
    }

    async getAll(): Promise<NewModel[]> {
        const results: NewModel[] = [];

        try {
            const documentList = await this.collectionPath()
                .get();

            for (let i = 0; i < documentList.docs.length; i++) {
                const document = documentList.docs[i];
                results.push(this.fromMap(document.data()));
            }
        } catch (e) {
            console.log(e);
        }
        return results;
    }

    async upsert(obj: NewModel): Promise<boolean> {
        try {
            await this.collectionPath()
                .doc(obj.DocId)
                .set(this.toMap(obj), {merge: true});
        } catch (e) {
            console.log(e);
            return false;
        }
        return true;
    }

    async delete(docId: string): Promise<boolean> {
        try {
            await this.collectionPath()
                .doc(docId)
                .delete();
        } catch (e) {
            console.log(e);
            return false;
        }
        return true;
    }

    async getByI000(value: number): Promise<NewModel | null> {
        try {
            const documentList = await this.collectionPath()
                .where("I000", "==", value)
                .get();

            if (documentList.docs.length > 0) {
                return this.fromMap(documentList.docs[0].data());
            }
        } catch (e) {
            console.log(e);
        }
        return null;
    }

    // async getByS000(value: string): Promise<NewModel | null> {
    //     try {
    //         const documentList = await this.collectionPath()
    //             .where("S000", "==", value)
    //             .get();
    //
    //         if (documentList.docs.length > 0) {
    //             return NewModel.dbUtil.fromMap(documentList.docs[0].data());
    //         }
    //
    //     } catch (e) {
    //         console.log(e);
    //     }
    //     return null;
    //
    // }


    toMap(obj: NewModel): object {
        return {
            DocId: obj.DocId,
            I000: obj.I000,
            // I001: obj.I001,
            // I002: obj.I002,
            // I003: obj.I003,
            // I004: obj.I004,
            // I005: obj.I005,
            // I006: obj.I006,
            // I007: obj.I007,
            // I008: obj.I008,
            // I009: obj.I009,
            // I010: obj.I010,
            // I011: obj.I011,
            // I012: obj.I012,
            // I013: obj.I013,
            // I014: obj.I014,
            // I015: obj.I015,
            // I016: obj.I016,
            // I017: obj.I017,
            // I018: obj.I018,
            // I019: obj.I019,
            // I020: obj.I020,
            // I021: obj.I021,
            // I022: obj.I022,
            // I023: obj.I023,
            // I024: obj.I024,
            // I025: obj.I025,
            // I026: obj.I026,
            // I027: obj.I027,
            // I028: obj.I028,
            // I029: obj.I029,
            // I030: obj.I030,
            // I031: obj.I031,
            // I032: obj.I032,
            // I033: obj.I033,
            // I034: obj.I034,
            // I035: obj.I035,
            // I036: obj.I036,
            // I037: obj.I037,
            // I038: obj.I038,
            // I039: obj.I039,
            // I040: obj.I040,
            // I041: obj.I041,
            // I042: obj.I042,
            // I043: obj.I043,
            // I044: obj.I044,
            // I045: obj.I045,
            // I046: obj.I046,
            // I047: obj.I047,
            // I048: obj.I048,
            // I049: obj.I049,
            // I050: obj.I050,
            // I051: obj.I051,
            // I052: obj.I052,
            // I053: obj.I053,
            // I054: obj.I054,
            // I055: obj.I055,
            // I056: obj.I056,
            // I057: obj.I057,
            // I058: obj.I058,
            // I059: obj.I059,
            // I060: obj.I060,
            // I061: obj.I061,
            // I062: obj.I062,
            // I063: obj.I063,
            // I064: obj.I064,
            // I065: obj.I065,
            // I066: obj.I066,
            // I067: obj.I067,
            // I068: obj.I068,
            // I069: obj.I069,
            // I070: obj.I070,
            // I071: obj.I071,
            // I072: obj.I072,
            // I073: obj.I073,
            // I074: obj.I074,
            // I075: obj.I075,
            // I076: obj.I076,
            // I077: obj.I077,
            // I078: obj.I078,
            // I079: obj.I079,
            // I080: obj.I080,
            // I081: obj.I081,
            // I082: obj.I082,
            // I083: obj.I083,
            // I084: obj.I084,
            // I085: obj.I085,
            // I086: obj.I086,
            // I087: obj.I087,
            // I088: obj.I088,
            // I089: obj.I089,
            // I090: obj.I090,
            // I091: obj.I091,
            // I092: obj.I092,
            // I093: obj.I093,
            // I094: obj.I094,
            // I095: obj.I095,
            // I096: obj.I096,
            // I097: obj.I097,
            // I098: obj.I098,
            // I099: obj.I099,
            // S000: obj.S000,
            // S001: obj.S001,
            // S002: obj.S002,
            // S003: obj.S003,
            // S004: obj.S004,
            // S005: obj.S005,
            // S006: obj.S006,
            // S007: obj.S007,
            // S008: obj.S008,
            // S009: obj.S009,
            // S010: obj.S010,
            // S011: obj.S011,
            // S012: obj.S012,
            // S013: obj.S013,
            // S014: obj.S014,
            // S015: obj.S015,
            // S016: obj.S016,
            // S017: obj.S017,
            // S018: obj.S018,
            // S019: obj.S019,
            // S020: obj.S020,
            // S021: obj.S021,
            // S022: obj.S022,
            // S023: obj.S023,
            // S024: obj.S024,
            // S025: obj.S025,
            // S026: obj.S026,
            // S027: obj.S027,
            // S028: obj.S028,
            // S029: obj.S029,
            // S030: obj.S030,
            // S031: obj.S031,
            // S032: obj.S032,
            // S033: obj.S033,
            // S034: obj.S034,
            // S035: obj.S035,
            // S036: obj.S036,
            // S037: obj.S037,
            // S038: obj.S038,
            // S039: obj.S039,
            // S040: obj.S040,
            // S041: obj.S041,
            // S042: obj.S042,
            // S043: obj.S043,
            // S044: obj.S044,
            // S045: obj.S045,
            // S046: obj.S046,
            // S047: obj.S047,
            // S048: obj.S048,
            // S049: obj.S049,
            // S050: obj.S050,
            // S051: obj.S051,
            // S052: obj.S052,
            // S053: obj.S053,
            // S054: obj.S054,
            // S055: obj.S055,
            // S056: obj.S056,
            // S057: obj.S057,
            // S058: obj.S058,
            // S059: obj.S059,
            // S060: obj.S060,
            // S061: obj.S061,
            // S062: obj.S062,
            // S063: obj.S063,
            // S064: obj.S064,
            // S065: obj.S065,
            // S066: obj.S066,
            // S067: obj.S067,
            // S068: obj.S068,
            // S069: obj.S069,
            // S070: obj.S070,
            // S071: obj.S071,
            // S072: obj.S072,
            // S073: obj.S073,
            // S074: obj.S074,
            // S075: obj.S075,
            // S076: obj.S076,
            // S077: obj.S077,
            // S078: obj.S078,
            // S079: obj.S079,
            // S080: obj.S080,
            // S081: obj.S081,
            // S082: obj.S082,
            // S083: obj.S083,
            // S084: obj.S084,
            // S085: obj.S085,
            // S086: obj.S086,
            // S087: obj.S087,
            // S088: obj.S088,
            // S089: obj.S089,
            // S090: obj.S090,
            // S091: obj.S091,
            // S092: obj.S092,
            // S093: obj.S093,
            // S094: obj.S094,
            // S095: obj.S095,
            // S096: obj.S096,
            // S097: obj.S097,
            // S098: obj.S098,
            // S099: obj.S099,
            // B000: obj.B000,
            // B001: obj.B001,
            // B002: obj.B002,
            // B003: obj.B003,
            // B004: obj.B004,
            // B005: obj.B005,
            // B006: obj.B006,
            // B007: obj.B007,
            // B008: obj.B008,
            // B009: obj.B009,
            // B010: obj.B010,
            // B011: obj.B011,
            // B012: obj.B012,
            // B013: obj.B013,
            // B014: obj.B014,
            // B015: obj.B015,
            // B016: obj.B016,
            // B017: obj.B017,
            // B018: obj.B018,
            // B019: obj.B019,
            // B020: obj.B020,
            // B021: obj.B021,
            // B022: obj.B022,
            // B023: obj.B023,
            // B024: obj.B024,
            // B025: obj.B025,
            // B026: obj.B026,
            // B027: obj.B027,
            // B028: obj.B028,
            // B029: obj.B029,
            // B030: obj.B030,

            // R000: obj.R000,
            // R001: obj.R001,
            // R002: obj.R002,
            // R003: obj.R003,
            // R004: obj.R004,
            // R005: obj.R005,
            // R006: obj.R006,
            // R007: obj.R007,
            // R008: obj.R008,
            // R009: obj.R009,
            // R010: obj.R010,
            // R011: obj.R011,
            // R012: obj.R012,
            // R013: obj.R013,
            // R014: obj.R014,
            // R015: obj.R015,
            // R016: obj.R016,
            // R017: obj.R017,
            // R018: obj.R018,
            // R019: obj.R019,
            // R020: obj.R020,
            // R021: obj.R021,
            // R022: obj.R022,
            // R023: obj.R023,
            // R024: obj.R024,
            // R025: obj.R025,
            // R026: obj.R026,
            // R027: obj.R027,
            // R028: obj.R028,
            // R029: obj.R029,
            // R030: obj.R030,

            // L000: obj.L000,
            // L001: obj.L001,
            // L002: obj.L002,
            // L003: obj.L003,
            // L004: obj.L004,
            // L005: obj.L005,
            // L006: obj.L006,
            // L007: obj.L007,
            // L008: obj.L008,
            // L009: obj.L009,
            // L010: obj.L010,
            // L011: obj.L011,
            // L012: obj.L012,
            // L013: obj.L013,
            // L014: obj.L014,
            // L015: obj.L015,
            // L016: obj.L016,
            // L017: obj.L017,
            // L018: obj.L018,
            // L019: obj.L019,
            // L020: obj.L020,

            // C000: obj.C000.toString(),
            // C001: obj.C001.toString(),
            // C002: obj.C002.toString(),
            // C003: obj.C003.toString(),
            // C004: obj.C004.toString(),
            // C005: obj.C005.toString(),
            // C006: obj.C006.toString(),
            // C007: obj.C007.toString(),
            // C008: obj.C008.toString(),
            // C009: obj.C009.toString(),
            // C010: obj.C010.toString(),
            // C011: obj.C011.toString(),
            // C012: obj.C012.toString(),
            // C013: obj.C013.toString(),
            // C014: obj.C014.toString(),
            // C015: obj.C015.toString(),
            // C016: obj.C016.toString(),
            // C017: obj.C017.toString(),
            // C018: obj.C018.toString(),
            // C019: obj.C019.toString(),
            // C020: obj.C020.toString(),

            // J000: obj.J000.map((subModel) => subModel.toString()),
            // J001: obj.J001.map((subModel) => subModel.toString()),
            // J002: obj.J002.map((subModel) => subModel.toString()),
            // J003: obj.J003.map((subModel) => subModel.toString()),
            // J004: obj.J004.map((subModel) => subModel.toString()),
            // J005: obj.J005.map((subModel) => subModel.toString()),
            // J006: obj.J006.map((subModel) => subModel.toString()),
            // J007: obj.J007.map((subModel) => subModel.toString()),
            // J008: obj.J008.map((subModel) => subModel.toString()),
            // J009: obj.J009.map((subModel) => subModel.toString()),
            // J010: obj.J010.map((subModel) => subModel.toString()),
            // J011: obj.J011.map((subModel) => subModel.toString()),
            // J012: obj.J012.map((subModel) => subModel.toString()),
            // J013: obj.J013.map((subModel) => subModel.toString()),
            // J014: obj.J014.map((subModel) => subModel.toString()),
            // J015: obj.J015.map((subModel) => subModel.toString()),
            // J016: obj.J016.map((subModel) => subModel.toString()),
            // J017: obj.J017.map((subModel) => subModel.toString()),
            // J018: obj.J018.map((subModel) => subModel.toString()),
            // J019: obj.J019.map((subModel) => subModel.toString()),
            // J020: obj.J020.map((subModel) => subModel.toString()),

            // E000: SomeEnumToString(obj.E000),
            // E001: SomeEnumToString(obj.E001),
            // E002: SomeEnumToString(obj.E002),
            // E003: SomeEnumToString(obj.E003),
            // E004: SomeEnumToString(obj.E004),
            // E005: SomeEnumToString(obj.E005),
            // E006: SomeEnumToString(obj.E006),
            // E007: SomeEnumToString(obj.E007),
            // E008: SomeEnumToString(obj.E008),
            // E009: SomeEnumToString(obj.E009),
            // E010: SomeEnumToString(obj.E010),
            // E011: SomeEnumToString(obj.E011),
            // E012: SomeEnumToString(obj.E012),
            // E013: SomeEnumToString(obj.E013),
            // E014: SomeEnumToString(obj.E014),
            // E015: SomeEnumToString(obj.E015),
            // E016: SomeEnumToString(obj.E016),
            // E017: SomeEnumToString(obj.E017),
            // E018: SomeEnumToString(obj.E018),
            // E019: SomeEnumToString(obj.E019),
            // E020: SomeEnumToString(obj.E020),
        };
    }

    fromMap(data: any): NewModel {
        const obj = new NewModel();

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
        // obj.S000 = data["S000"] ?? "";
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
        // obj.B000 = data["B000"] ?? false;
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

        // obj.R000 = data["R000"] ?? 0;
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

        // obj.L000 = data["L000"] ?? [];
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

        // obj.C000 = SomeModel.fromString(data["C000"] ?? user SomeModel().toString());
        // obj.C001 = SomeModel.fromString(data["C001"] ?? user SomeModel().toString());
        // obj.C002 = SomeModel.fromString(data["C002"] ?? user SomeModel().toString());
        // obj.C003 = SomeModel.fromString(data["C003"] ?? user SomeModel().toString());
        // obj.C004 = SomeModel.fromString(data["C004"] ?? user SomeModel().toString());
        // obj.C005 = SomeModel.fromString(data["C005"] ?? user SomeModel().toString());
        // obj.C006 = SomeModel.fromString(data["C006"] ?? user SomeModel().toString());
        // obj.C007 = SomeModel.fromString(data["C007"] ?? user SomeModel().toString());
        // obj.C008 = SomeModel.fromString(data["C008"] ?? user SomeModel().toString());
        // obj.C009 = SomeModel.fromString(data["C009"] ?? user SomeModel().toString());
        // obj.C010 = SomeModel.fromString(data["C010"] ?? user SomeModel().toString());
        // obj.C011 = SomeModel.fromString(data["C011"] ?? user SomeModel().toString());
        // obj.C012 = SomeModel.fromString(data["C012"] ?? user SomeModel().toString());
        // obj.C013 = SomeModel.fromString(data["C013"] ?? user SomeModel().toString());
        // obj.C014 = SomeModel.fromString(data["C014"] ?? user SomeModel().toString());
        // obj.C015 = SomeModel.fromString(data["C015"] ?? user SomeModel().toString());
        // obj.C016 = SomeModel.fromString(data["C016"] ?? user SomeModel().toString());
        // obj.C017 = SomeModel.fromString(data["C017"] ?? user SomeModel().toString());
        // obj.C018 = SomeModel.fromString(data["C018"] ?? user SomeModel().toString());
        // obj.C019 = SomeModel.fromString(data["C019"] ?? user SomeModel().toString());
        // obj.C020 = SomeModel.fromString(data["C020"] ?? user SomeModel().toString());

        // obj.J000 = ((typeof (data["J000"] ?? "[]") === "string") ? JSON.parse(data["J000"]) : data["J000"]).map(SomeModel.fromString);
        // obj.J001 = ((typeof (data["J001"] ?? "[]") === "string") ? JSON.parse(data["J001"]) : data["J001"]).map(SomeModel.fromString);
        // obj.J002 = ((typeof (data["J002"] ?? "[]") === "string") ? JSON.parse(data["J002"]) : data["J002"]).map(SomeModel.fromString);
        // obj.J003 = ((typeof (data["J003"] ?? "[]") === "string") ? JSON.parse(data["J003"]) : data["J003"]).map(SomeModel.fromString);
        // obj.J004 = ((typeof (data["J004"] ?? "[]") === "string") ? JSON.parse(data["J004"]) : data["J004"]).map(SomeModel.fromString);
        // obj.J005 = ((typeof (data["J005"] ?? "[]") === "string") ? JSON.parse(data["J005"]) : data["J005"]).map(SomeModel.fromString);
        // obj.J006 = ((typeof (data["J006"] ?? "[]") === "string") ? JSON.parse(data["J006"]) : data["J006"]).map(SomeModel.fromString);
        // obj.J007 = ((typeof (data["J007"] ?? "[]") === "string") ? JSON.parse(data["J007"]) : data["J007"]).map(SomeModel.fromString);
        // obj.J008 = ((typeof (data["J008"] ?? "[]") === "string") ? JSON.parse(data["J008"]) : data["J008"]).map(SomeModel.fromString);
        // obj.J009 = ((typeof (data["J009"] ?? "[]") === "string") ? JSON.parse(data["J009"]) : data["J009"]).map(SomeModel.fromString);
        // obj.J010 = ((typeof (data["J010"] ?? "[]") === "string") ? JSON.parse(data["J010"]) : data["J010"]).map(SomeModel.fromString);
        // obj.J011 = ((typeof (data["J011"] ?? "[]") === "string") ? JSON.parse(data["J011"]) : data["J011"]).map(SomeModel.fromString);
        // obj.J012 = ((typeof (data["J012"] ?? "[]") === "string") ? JSON.parse(data["J012"]) : data["J012"]).map(SomeModel.fromString);
        // obj.J013 = ((typeof (data["J013"] ?? "[]") === "string") ? JSON.parse(data["J013"]) : data["J013"]).map(SomeModel.fromString);
        // obj.J014 = ((typeof (data["J014"] ?? "[]") === "string") ? JSON.parse(data["J014"]) : data["J014"]).map(SomeModel.fromString);
        // obj.J015 = ((typeof (data["J015"] ?? "[]") === "string") ? JSON.parse(data["J015"]) : data["J015"]).map(SomeModel.fromString);
        // obj.J016 = ((typeof (data["J016"] ?? "[]") === "string") ? JSON.parse(data["J016"]) : data["J016"]).map(SomeModel.fromString);
        // obj.J017 = ((typeof (data["J017"] ?? "[]") === "string") ? JSON.parse(data["J017"]) : data["J017"]).map(SomeModel.fromString);
        // obj.J018 = ((typeof (data["J018"] ?? "[]") === "string") ? JSON.parse(data["J018"]) : data["J018"]).map(SomeModel.fromString);
        // obj.J019 = ((typeof (data["J019"] ?? "[]") === "string") ? JSON.parse(data["J019"]) : data["J019"]).map(SomeModel.fromString);
        // obj.J020 = ((typeof (data["J020"] ?? "[]") === "string") ? JSON.parse(data["J020"]) : data["J020"]).map(SomeModel.fromString);

        // obj.E000 = SomeEnumFromString(data["E000"] ?? "NotSelected");
        // obj.E001 = SomeEnumFromString(data["E001"] ?? "NotSelected");
        // obj.E002 = SomeEnumFromString(data["E002"] ?? "NotSelected");
        // obj.E003 = SomeEnumFromString(data["E003"] ?? "NotSelected");
        // obj.E004 = SomeEnumFromString(data["E004"] ?? "NotSelected");
        // obj.E005 = SomeEnumFromString(data["E005"] ?? "NotSelected");
        // obj.E006 = SomeEnumFromString(data["E006"] ?? "NotSelected");
        // obj.E007 = SomeEnumFromString(data["E007"] ?? "NotSelected");
        // obj.E008 = SomeEnumFromString(data["E008"] ?? "NotSelected");
        // obj.E009 = SomeEnumFromString(data["E009"] ?? "NotSelected");
        // obj.E010 = SomeEnumFromString(data["E010"] ?? "NotSelected");
        // obj.E011 = SomeEnumFromString(data["E011"] ?? "NotSelected");
        // obj.E012 = SomeEnumFromString(data["E012"] ?? "NotSelected");
        // obj.E013 = SomeEnumFromString(data["E013"] ?? "NotSelected");
        // obj.E014 = SomeEnumFromString(data["E014"] ?? "NotSelected");
        // obj.E015 = SomeEnumFromString(data["E015"] ?? "NotSelected");
        // obj.E016 = SomeEnumFromString(data["E016"] ?? "NotSelected");
        // obj.E017 = SomeEnumFromString(data["E017"] ?? "NotSelected");
        // obj.E018 = SomeEnumFromString(data["E018"] ?? "NotSelected");
        // obj.E019 = SomeEnumFromString(data["E019"] ?? "NotSelected");
        // obj.E020 = SomeEnumFromString(data["E020"] ?? "NotSelected");

        if (data["DocId"] != null) {
            obj.DocId = data["DocId"];
        }

        return obj;
    }
}

