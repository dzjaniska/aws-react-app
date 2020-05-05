import {STATUS} from "../utils/Constants";
import DateUtils from "../utils/DateUtils";

const mockRdvs = [
    {
        rdvId: "54f9ac86-8eb3-11ea-bc55-0242ac130003",
        voucherID: "14f9ac86-8eb3-11ea-bc55-0242ac130003",
        status: STATUS.OPEN,
        date: DateUtils.toDateUi("2020-05-05"),
        time: "15:00",
        patient: {
            patientId: "24f9ac86-8eb3-11ea-bc55-0242ac130003",
            firstName: "John",
            lastName: "Snow",
            maidenName: "",
            matricule: "1123789460123",
            email: "johnsnow@mail.com",
            phone: "+38012687065",
            address: {
                country: "LU",
                city: "LU",
                street: "xxx",
                number: "12",
                zip: "9638296"
            }
        },
        center: {
            centerID: "34f9ac86-8eb3-11ea-bc55-0242ac130003",
            city: "LU",
            address: "123 str",
            type: "MED",
            name: "MED CENTER 01"
        }
    },
    {
        rdvId: "54f9ac86-8eb3-11ea-bc55-0242ac130004",
        voucherID: "14f9ac86-8eb3-11ea-bc55-0242ac130004",
        status: STATUS.DONE,
        date: DateUtils.toDateUi("2020-05-05"),
        time: "15:00",
        patient: {
            patientId: "24f9ac86-8eb3-11ea-bc55-0242ac130004",
            firstName: "John01",
            lastName: "Snow",
            maidenName: "",
            matricule: "1123789460123",
            email: "John01snow@mail.com",
            phone: "+38012687065",
            address: {
                country: "LU",
                city: "LU",
                street: "xxx",
                number: "12",
                zip: "9638296"
            },
        },
        center: {
            centerID: "34f9ac86-8eb3-11ea-bc55-0242ac130004",
            city: "LU",
            address: "123 str",
            type: "MED",
            name: "MED CENTER 02"
        }
    },
    {
        rdvId: "54f9ac86-8eb3-11ea-bc55-0242ac130005",
        voucherID: "14f9ac86-8eb3-11ea-bc55-0242ac130005",
        status: STATUS.DONE,
        date: DateUtils.toDateUi("2020-05-05"),
        time: "15:00",
        patient: {
            patientId: "24f9ac86-8eb3-11ea-bc55-0242ac130005",
            firstName: "John02",
            lastName: "Snow",
            maidenName: "",
            matricule: "1123789460123",
            email: "John02snow@mail.com",
            phone: "+38012687065",
            address: {
                country: "LU",
                city: "LU",
                street: "xxx",
                number: "12",
                zip: "9638296"
            },
        },
        center: {
            centerID: "34f9ac86-8eb3-11ea-bc55-0242ac130005",
            city: "LU",
            address: "123 str",
            type: "MED",
            name: "MED CENTER 03"
        }
    },
    {
        rdvId: "54f9ac86-8eb3-11ea-bc55-0242ac130006",
        voucherID: "14f9ac86-8eb3-11ea-bc55-0242ac130006",
        status: STATUS.OPEN,
        date: DateUtils.toDateUi("2020-05-05"),
        time: "15:00",
        patient: {
            patientId: "24f9ac86-8eb3-11ea-bc55-0242ac130006",
            firstName: "John03",
            lastName: "Snow",
            maidenName: "",
            matricule: "1123789460123",
            email: "John03snow@mail.com",
            phone: "+38012687065",
            address: {
                country: "LU",
                city: "LU",
                street: "xxx",
                number: "12",
                zip: "9638296"
            },
        },
        center: {
            centerID: "34f9ac86-8eb3-11ea-bc55-0242ac130006",
            city: "LU",
            address: "123 str",
            type: "MED",
            name: "MED CENTER 04"
        }
    },
    {
        rdvId: "54f9ac86-8eb3-11ea-bc55-0242ac130007",
        voucherID: "14f9ac86-8eb3-11ea-bc55-0242ac130007",
        status: STATUS.DONE,
        date: DateUtils.toDateUi("2020-05-05"),
        time: "15:00",
        patient: {
            patientId: "24f9ac86-8eb3-11ea-bc55-0242ac130007",
            firstName: "John04",
            lastName: "Snow",
            maidenName: "",
            matricule: "1123789460123",
            email: "John04snow@mail.com",
            phone: "+38012687065",
            address: {
                country: "LU",
                city: "LU",
                street: "xxx",
                number: "12",
                zip: "9638296"
            },
        },
        center: {
            centerID: "34f9ac86-8eb3-11ea-bc55-0242ac130007",
            city: "LU",
            address: "123 str",
            type: "MED",
            name: "MED CENTER 05"
        }
    },
    {
        rdvId: "54f9ac86-8eb3-11ea-bc55-0242ac130008",
        voucherID: "14f9ac86-8eb3-11ea-bc55-0242ac130008",
        status: STATUS.CANCEL,
        date: DateUtils.toDateUi("2020-05-05"),
        time: "15:00",
        patient: {
            patientId: "24f9ac86-8eb3-11ea-bc55-0242ac130008",
            firstName: "John05",
            lastName: "Snow",
            maidenName: "",
            matricule: "1123789460123",
            email: "John05snow@mail.com",
            phone: "+38012687065",
            address: {
                country: "LU",
                city: "LU",
                street: "xxx",
                number: "12",
                zip: "9638296"
            },
        },
        center: {
            centerID: "34f9ac86-8eb3-11ea-bc55-0242ac130008",
            city: "LU",
            address: "123 str",
            type: "MED",
            name: "MED CENTER 06"
        }
    },
    {
        rdvId: "54f9ac86-8eb3-11ea-bc55-0242ac130009",
        voucherID: "14f9ac86-8eb3-11ea-bc55-0242ac130009",
        status: STATUS.DONE,
        date: DateUtils.toDateUi("2020-05-05"),
        time: "15:00",
        patient: {
            patientId: "24f9ac86-8eb3-11ea-bc55-0242ac130009",
            firstName: "John06",
            lastName: "Snow",
            maidenName: "",
            matricule: "1123789460123",
            email: "John06snow@mail.com",
            phone: "+38012687065",
            address: {
                country: "LU",
                city: "LU",
                street: "xxx",
                number: "12",
                zip: "9638296"
            },
        },
        center: {
            centerID: "34f9ac86-8eb3-11ea-bc55-0242ac130009",
            city: "LU",
            address: "123 str",
            type: "MED",
            name: "MED CENTER 07"
        }
    },
    {
        rdvId: "54f9ac86-8eb3-11ea-bc55-0242ac130010",
        voucherID: "14f9ac86-8eb3-11ea-bc55-0242ac130010",
        status: STATUS.OPEN,
        date: DateUtils.toDateUi("2020-05-05"),
        time: "15:00",
        patient: {
            patientId: "24f9ac86-8eb3-11ea-bc55-0242ac130010",
            firstName: "John07",
            lastName: "Snow",
            maidenName: "",
            matricule: "1123789460123",
            email: "John07snow@mail.com",
            phone: "+38012687065",
            address: {
                country: "LU",
                city: "LU",
                street: "xxx",
                number: "12",
                zip: "9638296"
            },
        },
        center: {
            centerID: "34f9ac86-8eb3-11ea-bc55-0242ac130010",
            city: "LU",
            address: "123 str",
            type: "MED",
            name: "MED CENTER 08"
        }
    },
    {
        rdvId: "54f9ac86-8eb3-11ea-bc55-0242ac130011",
        voucherID: "14f9ac86-8eb3-11ea-bc55-0242ac130011",
        status: STATUS.OPEN,
        date: DateUtils.toDateUi("2020-05-05"),
        time: "15:00",
        patient: {
            patientId: "24f9ac86-8eb3-11ea-bc55-0242ac130011",
            firstName: "John08",
            lastName: "Snow",
            maidenName: "",
            matricule: "1123789460123",
            email: "John08snow@mail.com",
            phone: "+38012687065",
            address: {
                country: "LU",
                city: "LU",
                street: "xxx",
                number: "12",
                zip: "9638296"
            },
        },
        center: {
            centerID: "34f9ac86-8eb3-11ea-bc55-0242ac130011",
            city: "LU",
            address: "123 str",
            type: "MED",
            name: "MED CENTER 09"
        }
    },
    {
        rdvId: "54f9ac86-8eb3-11ea-bc55-0242ac130012",
        voucherID: "14f9ac86-8eb3-11ea-bc55-0242ac130012",
        status: STATUS.CANCEL,
        date: DateUtils.toDateUi("2020-05-05"),
        time: "15:00",
        patient: {
            patientId: "24f9ac86-8eb3-11ea-bc55-0242ac130012",
            firstName: "John09",
            lastName: "Snow",
            maidenName: "",
            matricule: "1123789460123",
            email: "John09snow@mail.com",
            phone: "+38012687065",
            address: {
                country: "LU",
                city: "LU",
                street: "xxx",
                number: "12",
                zip: "9638296"
            },
        },
        center: {
            centerID: "34f9ac86-8eb3-11ea-bc55-0242ac130012",
            city: "LU",
            address: "123 str",
            type: "MED",
            name: "MED CENTER 10"
        }
    }
];

export default mockRdvs;
