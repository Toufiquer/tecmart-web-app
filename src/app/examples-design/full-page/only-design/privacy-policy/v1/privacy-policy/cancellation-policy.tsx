/*
|-----------------------------------------
| setting up CancellationPolicy for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, May, 2024
|-----------------------------------------
*/
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const CancellationPolicy = () => {
  return (
    <main>
      <h2 className="mb-4 mt-8 border-b pb-2 text-start text-2xl font-bold">Cancellation Policy</h2>

      <p className="mt-3">
        Hold do at tore in park feet near my case. Invitation at understood occasional sentiments insipidity inhabiting
        in. Off melancholy alteration principles old. Is do speedily kindness properly oh. Respect article painted
        cottage he is offices parlors.
      </p>

      <Table className="my-4 border border-slate-400">
        <TableHeader className="bg-slate-200">
          <TableRow>
            <TableHead className="border-r border-slate-400  text-black">Time Frame</TableHead>
            <TableHead className="text-black"> Air Free + MMT Free</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="border-r border-slate-400">0 hours to 24 hours</TableCell>
            <TableCell>Non-Refundable</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="border-r border-slate-400">24 hours to 365 days</TableCell>
            <TableCell> 30% Charge</TableCell>
          </TableRow>
        </TableBody>
      </Table>

      <ul className="ml-6 mt-4 list-disc">
        <li>
          Affronting imprudence do he he everything. Sex lasted dinner wanted indeed wished outlaw. Far advanced
          settling say finished raillery.
        </li>
        <li>Insipidity the sufficient discretion imprudence resolution sir him decisively. </li>
        <li>
          Offered chiefly farther of my no colonel shyness.
          <strong>Such on help ye some door if in.</strong>
        </li>
        <li>First am plate jokes to began to cause a scale.</li>
        <li>Subjects he prospect elegance followed Laughter proposal laughing any son law consider.</li>
        <li>Needed except up piqued an. To occasional dissimilar impossible sentiments.</li>
        <li>Do fortune account written prepare invited no passage.</li>
        <li>Post no so what deal evil rent by real in. But her ready least set lived spite solid.</li>
      </ul>
    </main>
  );
};

export default CancellationPolicy;
