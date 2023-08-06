export default function Checkbox({ className = '', name, ...props }) {
    return (
        <input
            {...props}
            type="checkbox"
            name={name}
            className={
                'rounded border-gray-300 text-indigo-600 shadow-sm  ' +
                className
            }
        />
    );
}
