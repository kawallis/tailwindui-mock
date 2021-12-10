export const RadioGroup = ({ notificationMethods, name }) => {
  return (
    <div className="space-y-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-10">
      {notificationMethods.map((notificationMethod) => (
        <div key={notificationMethod.id} className="flex items-center">
          <input
            id={notificationMethod.id}
            name={name}
            type="radio"
            checked={notificationMethod.enabled}
            defaultChecked={notificationMethod.enabled}
            className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300"
          />
          <label
            htmlFor={notificationMethod.id}
            className="ml-3 block text-sm font-medium text-gray-700"
          >
            {notificationMethod.title}
          </label>
        </div>
      ))}
    </div>
  );
};
