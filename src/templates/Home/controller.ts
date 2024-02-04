import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useCallback, useState } from 'react';
import { FormSchemaData, formSchema } from './validation/formSchema';
import { useFormData } from './context/FormDataContext';

const INITIAL_PHONE_FORMAT = '(##) ####-####';
const LONG_PHONE_FORMAT = '(##) # ####-####';
const EXTRA_LONG_PHONE_FORMAT = '(##) ####-#####';

export type useHomeControllerProps = {
    onSubmit?: (data: FormSchemaData) => void;
};

export function useHomeController({ onSubmit }: useHomeControllerProps) {
    const router = useRouter();
    const {
        control,
        register,
        handleSubmit: hookFormSubmit,
        formState: { errors },
    } = useForm<FormSchemaData>({
        resolver: zodResolver(formSchema),
    });
    const [phoneFormat, setPhoneFormat] = useState(INITIAL_PHONE_FORMAT);

    const { setFormData } = useFormData();

    const handleChangePhone = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>, callback: (...event: any[]) => void) => {
            const phoneLength = e.target.value.replace(/\s/g, '').length;
            if (phoneLength > 13) {
                setPhoneFormat(LONG_PHONE_FORMAT);
            }
            if (phoneLength === 13) {
                setPhoneFormat(EXTRA_LONG_PHONE_FORMAT);
            }
            callback(e);
        },
        [setPhoneFormat]
    );

    const handleFormSubmit = hookFormSubmit(async (data: FormSchemaData) => {
        try {
            if (onSubmit) {
                onSubmit(data);
            }
            setFormData(data);
            router.push(`/result`);
        } catch (error) {
            console.error('Error during form submission or routing:', error);
        }
    });

    return {
        control,
        register,
        errors,
        handleSubmit: handleFormSubmit,
        phoneFormat,
        handleChangePhone,
    };
}
