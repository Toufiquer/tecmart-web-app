/*
|-----------------------------------------
| setting up Agreement for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: DaaUK, September, 2023
|-----------------------------------------
*/
import { Button } from "@/components/ui/button";

const Agreement = () => {
  return (
    <main className="flex items-center justify-start gap-2 py-8">
      <Button variant="outline">Not right now...</Button>
      <Button variant="default">I agree with terms</Button>
    </main>
  );
};

export default Agreement;
