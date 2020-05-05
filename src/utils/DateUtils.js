import moment from "moment";

export default class DateUtils {

    static parse(input) {
        if (!input) {
            return null;
        } else {
            const m = moment(input);
            return m.isValid() ? m : null;
        }
    }

    static toDateUi(input) {
        if (!input) {
            return '';
        }
        return moment(input).format("DD.MM.YYYY");
    }

    static toDateTimeUi(input) {
        if (!input) {
            return '';
        }
        return moment(input).format("DD.MM.YYYY HH:mm");
    }

    static toDateIso(input) {
        if (!input) {
            return "";
        }
        if(typeof input === 'string') {
            const parts = input.split('-');
            if(parts.length > 1) {
                if(parts.length === 3) {
                    if(parts[0].length === 4 && parts[0].length === 2 && parts[0].length === 2) {
                        //apply date validations with moment js
                        return moment(input, "YYYY-MM-DD").format("YYYY-MM-DD")
                    }
                }
                return '';
            }
        }

        return moment(input, "DD/MM/YYYY").format("YYYY-MM-DD");
    }

    static formatDateByTemplate(moment, template) {
        if (!moment) {
            return '';
        } else {
            return moment.format(template);
        }
    }

    static toDateTimeIso(input) {
        if (!input) {
            return "";
        }
        if(input.format) {
            return input.format("YYYY-MM-DDTHH:mm:ss.SSSZ")
        }
        const parts = input.split(" ");
        const date = this.toDateIso(parts[0]);
        if(!date) {
            return "";
        }
        if (parts.length === 1) {
            return date + "T00:00:00.000Z";
        } else {
            let time = parts[1].split(":");
            if (time.length === 1) {
                return date + "T00:00:00.000Z";
            } else if (time.length === 2) {
                time.push("00");
            }
            if (time.map(v => parseInt(v)).filter(v => !isNaN(v)).length !== 3) {
                return date + "T00:00:00.000Z";
            }
            let offset = moment().utcOffset();
            if(offset) {
                const belowZero = offset < 0;
                offset = Math.abs(offset / 60);
                if(offset < 10) {
                    offset = "0" + offset
                }
                offset = (belowZero ? "-" : "+") + offset + ":00";
            } else {
                offset = "Z"
            }
            return date + "T" + time.join(":") + ".000" + offset;
        }
    }
}
