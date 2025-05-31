import CaseCard from "@/components/ui/CaseCard";

export default function FavouritePage() {
  return (
    <>
      <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
        Favourites
      </h3>

      <section className="py-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {[...Array(2)].map((_, idx) => (
            <CaseCard key={idx} />
          ))}
        </div>
      </section>
    </>
  );
}
