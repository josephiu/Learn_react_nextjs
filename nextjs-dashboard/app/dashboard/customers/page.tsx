
import CustomersTable from "@/app/ui/customers/table";
import { fetchFilteredCustomers} from "@/app/lib/data";
import { lusitana } from "@/app/ui/fonts";

export default async function Page(props: {
  searchParams?: Promise<{
    query?: string;
    // page?: string;
  }>;

}) {
  const Params = await props.searchParams;
  const searchQuery = Params?.query || '';// Get search term

   const fetchedCustomers = await fetchFilteredCustomers(searchQuery);

  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Customers Dashboard
      </h1>
      
      <div className="mt-6">
        <CustomersTable customers={fetchedCustomers} />
      </div>
    </main>
  );
}
