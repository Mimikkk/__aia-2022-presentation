import { FC, useState } from "react";
import { ClientList } from "../ClientList";
import { ClientSummary } from "../ClientSummary";
import { ClientService } from "../../services";

export const App: FC = () => {
  const [clients] = useState(ClientService.readAll());

  return (
    <main className="grid grid-cols-12 w-full h-full">
      <section className="p-2 col-span-4 flex justify-center overflow-auto">
        <ClientList clients={clients} />
      </section>
      <section className="p-2 col-span-8 bg-gray-600 flex justify-center overflow-auto">
        <ClientSummary clients={clients} />
      </section>
    </main>
  );
};
