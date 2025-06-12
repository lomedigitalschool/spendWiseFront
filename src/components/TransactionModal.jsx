import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { Label } from "./ui/label";
import { Input } from "./ui/input";

export function TransactionsModal({ transactionType, showModal, onClose }) {
  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog open={showModal} onOpenChange={handleClose} className="">
      <form>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader className="">
            <DialogTitle className="text-center">
              Ajouter un{transactionType === "revenu" ? "" : "e"}{" "}
              {transactionType}
            </DialogTitle>
          </DialogHeader>
          {/* description */}
          <div className="flex flex-col gap-4 mx-4 mt-8">
            <Label Label htmlFor="description ">
              Descrption <span className="text-indigo-800">*</span>
            </Label>
            <Input
              type="text"
              placeholder="Une description de la transaction ex: achat de chaussure"
              className="border-gray-600"
            />
          </div>
          {/* amount */}
          <div className="flex flex-col gap-4 mx-4">
            <Label htmlFor="amount">
              Montant <span className="text-indigo-800">*</span>
            </Label>
            <Input
              type="text"
              placeholder="Montant de la transaction"
              className="border-gray-600"
            />
          </div>

          {/* categories */}
          <div className="flex flex-col gap-4 mx-4">
            <Label htmlFor="catergory">Categories</Label>
            <select
              defaultValue="Pick a color"
              className="select select-lg cursor-pointer duration-100 ease-in"
            >
              <option>choisissez une categorie</option>
              <option>Alimentation</option>
              <option>Business</option>
              <option>Divertissement</option>
              <option>Santé</option>
              <option>Transport</option>
            </select>
          </div>

          <div className="flex justify-start flex-row-reverse gap-4">
            <button
              className="cursor-pointer btn btn-ghost"
              onClick={handleClose}
            >
              annuler
            </button>

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
          </div>
        </DialogContent>
      </form>
    </Dialog>
  );
}
