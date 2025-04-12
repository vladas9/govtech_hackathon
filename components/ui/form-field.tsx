import { Input } from "./input"
import { Label } from "./label"
import { Textarea } from "./textarea"
import { cn } from "@/lib/utils"

interface FormFieldProps {
  id: string
  label: string
  description?: string
  type?: "text" | "email" | "password" | "textarea" | "number"
  placeholder?: string
  required?: boolean
  className?: string
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  suffix?: string
  error?: string
  maxLength?: number
}

export function FormField({
  id,
  label,
  description,
  type = "text",
  placeholder,
  required = false,
  className,
  value,
  onChange,
  suffix,
  error,
  maxLength,
  ...props
}: FormFieldProps) {
  return (
    <div className={cn("space-y-2", className)}>
      <Label 
        htmlFor={id}
        className="text-base font-medium"
      >
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </Label>
      
      {description && (
        <p className="text-sm text-gray-500">{description}</p>
      )}
      
      <div className="relative">
        {type === "textarea" ? (
          <Textarea
            id={id}
            name={id}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            maxLength={maxLength}
            className={cn(error && "border-red-500")}
            {...props}
          />
        ) : (
          <div className="relative">
            <Input
              id={id}
              name={id}
              type={type}
              placeholder={placeholder}
              value={value}
              onChange={onChange}
              maxLength={maxLength}
              className={cn(
                error && "border-red-500",
                suffix && "pr-16"
              )}
              {...props}
            />
            
            {suffix && (
              <div className="absolute inset-y-0 right-0 flex items-center px-4 text-gray-500 bg-gray-100 border-l rounded-r-md">
                {suffix}
              </div>
            )}
          </div>
        )}
      </div>
      
      {error && (
        <p className="text-sm text-red-500">{error}</p>
      )}
      
      {maxLength && value && (
        <div className="text-xs text-gray-500 text-right">
          {value.length}/{maxLength}
        </div>
      )}
    </div>
  )
} 