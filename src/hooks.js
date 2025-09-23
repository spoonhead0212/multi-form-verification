import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from 'react-hook-form'

export function useFormSetup(schema, defaultValues) {
    return(
        useForm({
            resolver: zodResolver(schema),
            defaultValues,
            mode: 'onChange'
        })
    )
}