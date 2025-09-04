// pages/index.tsx
import Card from "../components/common/Card";
import Button from "../components/common/Button";

export default function Home() {
  return (
    <>
      <main className="p-6 flex flex-col gap-6 ">
        {/* Centered button */}
        <div className="flex justify-left">
          <Button label="Book Now" onClick={() => alert("Booking started")} />
        </div>

        {/* Cards side by side */}
        <div className="flex gap-6">
          <Card
            title="Gokce Gemile Estate"
            location="Kayaköy, Turkey"
            image="/assets/image 2.png"
            price="$980/night"
          />
          <Card
            title="Luxury 1000 sqm Villa"
            location="Marrakech, Morocco"
            image="/assets/image 3.png"
            price="$1,430/night"
          />
        </div>
      </main>
    </>
  );
}
