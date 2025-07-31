import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { InputText } from "primereact/inputtext";
import { InputMask, InputMaskChangeEvent } from "primereact/inputmask";
import { Dropdown, DropdownChangeEvent } from "primereact/dropdown";
import { Button } from "primereact/button";
import {
  SearchFormContainer,
  FormRow,
  FormField,
  Label,
  ErrorMessage,
} from "./styles";
import { SearchFormProps, SearchFormData, SearchType } from "../../../types";

interface SearchTypeOption {
  label: string;
  value: SearchType;
}

const validationMap: Record<SearchType, z.ZodString> = {
  nome: z.string()
    .min(2, "Digite pelo menos 2 caracteres")
    .refine(v => /[A-Za-zÀ-ÿ]/.test(v), "Nome deve conter letras"),
  email: z.string()
    .min(1, "Digite um email")
    .email("Formato de email inválido"),
  documento: z.string()
    .min(1, "Digite um documento")
    .refine(v => {
      const len = v.replace(/\D/g, "").length;
      return len === 11 || len === 14;
    }, "CPF deve ter 11 dígitos ou CNPJ 14"),
  telefone: z.string()
    .min(1, "Digite um telefone")
    .refine(v => v.replace(/\D/g, "").length >= 10, "Telefone deve ter ao menos 10 dígitos"),
  endereco: z.string()
    .min(5, "Endereço com mínimo de 5 caracteres")
    .refine(v => /[A-Za-zÀ-ÿ]/.test(v) && /\d/.test(v), "Endereço deve conter letras e números"),
  "": z.string().min(1, "Digite um valor para busca")
};

const getSchema = (type: SearchType): z.ZodObject<any> =>
  z.object({
    searchType: z.string().min(1, "Selecione o tipo de busca"),
    searchValue: validationMap[type] || z.string().min(1, "Digite um valor para busca"),
  });

const placeholders: Record<SearchType, string> = {
  nome: "Digite o nome",
  documento: "Digite CPF ou CNPJ",
  email: "Digite o email",
  telefone: "Digite o telefone",
  endereco: "Digite o endereço",
  "": "Digite o valor"
};

const maskMap = {
  documento: (val: string): string =>
    val.replace(/\D/g, "").length > 11
      ? "99.999.999/9999-99"
      : "999.999.999-99",
  telefone: "(99) 99999-9999",
};

const searchTypeOptions: SearchTypeOption[] = [
  { label: "Selecione o tipo de busca", value: "" },
  { label: "Nome (Pessoa ou Empresa)", value: "nome" },
  { label: "CPF/CNPJ", value: "documento" },
  { label: "Email", value: "email" },
  { label: "Telefone", value: "telefone" },
  { label: "Endereço", value: "endereco" },
];

const SearchForm: React.FC<SearchFormProps> = ({ onSearch, loading }) => {
  const [searchType, setSearchType] = useState<SearchType>("");
  const [inputValue, setInputValue] = useState<string>("");

  const {
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    trigger,
  } = useForm<SearchFormData>({
    resolver: zodResolver(getSchema(searchType)) as any,
    mode: "onBlur",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement> | InputMaskChangeEvent): void => {
    const value = e.target.value || "";
    setInputValue(value);
    setValue("searchValue", value);
  };

  const handleSearchTypeChange = ({ value }: DropdownChangeEvent): void => {
    const newValue = value || "";
    setSearchType(newValue as SearchType);
    setValue("searchType", newValue);
    setValue("searchValue", "");
    setInputValue("");
    setTimeout(() => trigger("searchValue"), 100);
  };

  const handleClear = (): void => {
    reset();
    setSearchType("");
    setInputValue("");
    onSearch({});
  };

  const renderInput = (): React.ReactElement => {
    const placeholder = placeholders[searchType] || "Digite o valor";
    const commonProps = {
      id: "searchValue",
      placeholder,
      value: inputValue,
      onChange: handleInputChange,
      onBlur: () => trigger("searchValue"),
      className: errors.searchValue ? "p-invalid" : "",
      disabled: !searchType,
    };

    if (searchType === "documento") {
      return (
        <InputMask
          {...commonProps}
          mask={maskMap.documento(inputValue)}
          autoClear={false}
        />
      );
    }

    if (searchType === "telefone") {
      return <InputMask {...commonProps} mask={maskMap.telefone} />;
    }

    return <InputText {...commonProps} />;
  };

  const onSubmit: SubmitHandler<SearchFormData> = (data) => {
    onSearch({ [data.searchType]: data.searchValue });
  };

  return (
    <SearchFormContainer onSubmit={handleSubmit(onSubmit)}>
      <FormRow>
        <FormField>
          <Label htmlFor="searchType">Tipo de Busca</Label>
          <Dropdown
            id="searchType"
            value={searchType}
            options={searchTypeOptions}
            onChange={handleSearchTypeChange}
            placeholder="Selecione o tipo de busca"
            className={errors.searchType ? "p-invalid" : ""}
          />
          {errors.searchType && (
            <ErrorMessage>{errors.searchType.message}</ErrorMessage>
          )}
        </FormField>

        <FormField>
          <Label htmlFor="searchValue">Valor da Busca</Label>
          {renderInput()}
          {errors.searchValue && (
            <ErrorMessage>{errors.searchValue.message}</ErrorMessage>
          )}
        </FormField>

        <FormField>
          <Button
            type="submit"
            label="Pesquisar"
            icon="pi pi-search"
            loading={loading}
            disabled={!searchType}
            style={{
              minWidth: "120px",
              backgroundColor: "#007bff",
              borderColor: "#007bff",
            }}
          />
        </FormField>

        <FormField>
          <Button
            type="button"
            label="Limpar"
            icon="pi pi-times"
            severity="secondary"
            onClick={handleClear}
            style={{
              minWidth: "120px",
              backgroundColor: "#6c757d",
              borderColor: "#6c757d",
            }}
          />
        </FormField>
      </FormRow>
    </SearchFormContainer>
  );
};

export default SearchForm; 