export default function Checkbox({ className = '', name, checked = false, ...props }) {
    return (
        <input
            {...props}
            type="checkbox"
            name={name}
            className={
                'rounded border-gray-300 text-indigo-600 shadow-sm  ' +
                className
            }
            defaultChecked={checked}
        />
    );
}
