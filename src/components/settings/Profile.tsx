import { User } from "lucide-react";
import { SettingSection } from "./SettingSection";

export const Profile = () => {
  return (
    <SettingSection icon={User} title="Profile">
      <div className="flex flex-col sm:flex-row items-center mb-6">
        <img
          src="https://i.pinimg.com/736x/5e/ff/e8/5effe8dbc2d9f4c4d76fe601e324f7f7.jpg"
          alt="Profile picture"
          className="rounded-full w-20 h-20 object-cover mr-4"
        />

        <div>
          <h3 className="text-lg font-semibold text-gray-100">
            Cauan Lagrotta
          </h3>
          <p className="text-gray-400">cauanlagrotta.dev@gmail.com</p>
        </div>
      </div>

      <button className="cursor-pointer bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded transition duration-200 w-full sm:w-auto">
        Edit Profile
      </button>
    </SettingSection>
  );
};
