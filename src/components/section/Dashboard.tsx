
export const Dashboard = () => {
  return (
    <section className="p-8 bg-gray-100 h-full">
      <h1 className="text-2xl font-bold mb-4 text-gray-800">Dashboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <WidgetCard title="Total Revenue" value="$1,234,567" />
        <WidgetCard title="New Users" value="4,567"/>
        <WidgetCard title="Bounce Rate" value="12.34%"/>
      </div>
    </section>
  );
};
type WidgetCardProps = {
  title: string;
  value: string | number;
};

const WidgetCard = ({ title, value}: WidgetCardProps) => {
  return (
    <div className={`p-4 border border-gray-300 rounded-lg shadow-md mb-4 bg-white`}>
      <div className="flex items-center mb-2">
        <h2 className="text-xl font-semibold text-gray-700">{title}</h2>
      </div>
      <div className="text-3xl font-bold text-green-500">{value}</div>
    </div>
  );
};