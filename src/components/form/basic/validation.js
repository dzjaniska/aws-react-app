import {word} from "../../../utils/StringUtils";

export const required = value => value ? undefined : word("registration_form", "required");

export const matricule = value => !!Number(value) && `${value}`.length === 13 ? undefined : word("registration_form", "matricule_validation");
