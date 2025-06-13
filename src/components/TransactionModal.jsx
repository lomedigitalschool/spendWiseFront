import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { useForm } from "react-hook-form";
import { Schema } from "../Schema/Schema";
import { yupResolver } from "@hookform/resolvers/yup";

export function TransactionsModal({
  transactionType,
  showModal,
  onClose,
  modalType,
  selectedTransaction,
}) {
  const {
    register,
    setValue,
    getValues,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(Schema),
  });

  const fields = ["description", "amount", "date", "category"];

  if (selectedTransaction && modalType === "edit") {
    fields.forEach((field) => {
      if (selectedTransaction[field] !== undefined)
        setValue(field, selectedTransaction[field]);
    });
  } else if (selectedTransaction && modalType === "create") {
    fields.forEach((field) => {
      setValue(field, "");
    });
  }

  const handleClose = () => {
    reset();
    onClose();
  };

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Dialog open={showModal} onOpenChange={handleClose} className="">
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader className="">
          <DialogTitle className="text-center">
            Ajouter un{transactionType === "revenu" ? "" : "e"}{" "}
            {transactionType}
          </DialogTitle>
        </DialogHeader>
        <form className="flex flex-col gap-2" onSubmit={handleSubmit(onSubmit)}>
          {/* description */}
          <div className="flex flex-col gap-4 mx-4 ">
            <Label htmlFor="description ">
              Descrption<span className="text-indigo-800">*</span>
            </Label>
            <Input
              id="description"
              type="text"
              {...register("description")}
              placeholder="ex: achat de chaussure"
              className={
                errors.description ? "border-rose-700" : "border-gray-600"
              }
            />
          </div>
          {errors.description && (
            <p className="text-rose-800 text-center">
              {errors.description.message}
            </p>
          )}
          {/* amount */}
          <div className="flex flex-col gap-4 mx-4">
            <Label htmlFor="amount">
              Montant<span className="text-indigo-800">*</span>
            </Label>
            <Input
              id="amount"
              type="text"
              {...register("amount")}
              placeholder="Montant de la transaction"
              className={errors.amount ? "border-rose-700" : "border-gray-600"}
            />
          </div>
          {errors.amount && (
            <p className="text-rose-800 text-center">{errors.amount.message}</p>
          )}
          {/* date */}
          <div className="flex flex-col gap-4 mx-4">
            <Label htmlFor="date">
              Date<span className="text-indigo-800">*</span>
            </Label>
            <Input
              id="date"
              type="date"
              {...register("date")}
              placeholder="Montant de la transaction"
              className={errors.date ? "border-rose-700" : "border-gray-600"}
            />
          </div>
          {errors.date && (
            <p className="text-rose-800 text-center">{errors.date.message}</p>
          )}
          {/* categories */}
          <div className="flex flex-col gap-4 mx-4">
            <Label htmlFor="catergory">Categories</Label>
            <select
              id="category"
              {...register("category")}
              className="select select-lg cursor-pointer duration-100 ease-in"
            >
              <option value="">--choisissez une categorie--</option>
              <option value="Alimentaion">Alimentation</option>
              <option value="Logement">Logement</option>
              <option value="Transport">Transport</option>
              <option value="Loisirs">Loisirs</option>
              <option value="Santé">Santé</option>
              <option value="Éducation">Education</option>
              <option value="Autres">autres</option>
            </select>
          </div>
          <div className="flex justify-start flex-row-reverse gap-4">
            <button
              className={
                transactionType === "revenu"
                  ? "btn btn-primary"
                  : "btn btn-neutral"
              }
              type="submit"
            >
              Ajouter
            </button>
          </div>{" "}
        </form>
      </DialogContent>
    </Dialog>
  );
}
