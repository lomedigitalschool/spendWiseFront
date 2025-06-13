import * as yup from "yup";

export const Schema = yup.object().shape({
  description: yup
    .string()
    .required("la description est obligatoire")
    .min(5, "trop court! minimum 5 caractères "),

  amount: yup
    .number()
    .typeError("veuillez entrer un nombre")
    .required("Veuillez entrer un montant")
    .positive("le montant doit etre positive"),

  date: yup
    .date()
    .transform((value, originalValue) => {
      // Transforme une chaîne vide en null
      return originalValue === "" ? null : value;
    })
    .required("veuillez selectionner une date")
    .max(new Date(), "La date ne peut pas être dans le futur"),
});
