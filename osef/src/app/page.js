'use client'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import ElectricityForm from "./components/ElectricityForm";


const formSchema = z.object({
  username: z.string().min(2).max(50),
})


export default function Home() {

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  })

  return (
    <div className="h-screen">
      <ElectricityForm/>
    </div>
  );
}
