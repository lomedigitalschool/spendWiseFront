import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { useForm } from "react-hook-form";
import { Schema } from "../Schema/Schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { postTransaction } from "../lib/poster";
import toast from "react-hot-toast";

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
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(Schema),
  });

  const fields = ["description", "amount", "date", "categoryId"];
  //gestion de du type de modal à afficher
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
  // gestion de la fermeture du modal
  const handleClose = () => {
    reset();
    onClose();
  };

  const onSubmit = async (data) => {
    data.type = transactionType === "revenu" ? "income" : "expense";

    const response = await postTransaction(data);
    if (response.statusText === "OK") {
      toast.success("transaction ajouté ");
    } else if (!response) {
      console.log(response);

      // toast.error("error lors de l'ajout");
    }
    setTimeout(() => {
      handleClose();
    }, 1000);
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
              {...register("categoryId")}
              className="select select-lg cursor-pointer duration-100 ease-in"
            >
              <option value="">--choisissez une categorie--</option>
              <option value={1}>Alimentation</option>
              <option value={2}>Logement</option>
              <option value={3}>Transport</option>
              <option value={4}>Loisirs</option>
              <option value={5}>Santé</option>
              <option value={6}>Education</option>
              <option value={7}>autres</option>
            </select>
          </div>
          <div className="flex justify-start flex-row-reverse gap-4">
            <button
              className={
                transactionType === "revenu"
                  ? "btn btn-primary"
                  : "btn btn-neutral"
              }
              disabled={isSubmitting}
              type="submit"
            >
              {isSubmitting ? "Ajout en cours..." : "Ajouter"}
            </button>
          </div>{" "}
        </form>
      </DialogContent>
    </Dialog>
  );
}
