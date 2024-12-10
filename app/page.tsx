import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, YoutubeIcon } from "lucide-react";


export default function Home() {
  return (
    <div className=" dark h-screen w-screen flex flex-col items-center justify-center bg-slate-950">
      <Card className="">
        <CardHeader>
          <CardTitle className="text-blue-700 font-bold uppercase text-2xl">
            teste
          </CardTitle>
          <CardDescription>testandoo</CardDescription>
        </CardHeader>
        <CardContent>
          <p>
            iformação do card...
          </p>
        </CardContent>
        <CardFooter className="flex justify-center w-full gap-4">
          <Button variant={"outline"} size={"icon"}>
            <Github />
          </Button>
          <Button variant={"outline"} size={"icon"}>
            <YoutubeIcon />
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
