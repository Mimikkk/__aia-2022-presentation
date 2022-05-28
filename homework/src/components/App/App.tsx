import { FC, useState } from "react";
import { mockClients } from "../../mocks";
import { ClientList } from "../ClientList";
import { ClientSummary } from "../ClientSummary";


export const App: FC = () => {
  const [clients] = useState(mockClients(100));

  return (
    <main className="grid grid-cols-3 w-full h-full">
      <section className="p-2 col-span-2 flex justify-center overflow-auto">
        <ClientList clients={clients} />
      </section>
      <section className="p-2 bg-gray-600 flex justify-center overflow-auto">
        <ClientSummary clients={clients} />
      </section>
    </main>
  );
};
