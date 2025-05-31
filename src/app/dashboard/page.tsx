import { LineAreaChart } from "@/components/LineAreaChart";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function DashboardPage() {
  return (
    <>
      <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
        Dashboard
      </h3>

      <section className="py-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <Card>
            <CardHeader>
              <CardTitle>Total Cases Extracted</CardTitle>
            </CardHeader>
            <CardContent>
              <h2 className="text-4xl font-bold">105</h2>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Cases This Month</CardTitle>
            </CardHeader>
            <CardContent>
              <h2 className="text-4xl font-bold">500</h2>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Favourite Cases</CardTitle>
            </CardHeader>
            <CardContent>
              <h2 className="text-4xl font-bold">2</h2>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-5">
        <LineAreaChart />
      </section>
    </>
  );
}
