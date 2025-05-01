import { useState } from "react";
import { SettingSection } from "./SettingSection";
import { Bell } from "lucide-react";
import { ToggleSwitch } from "./ToggleSwitch";

export const Notifications = () => {
  const [notifications, setNotifications] = useState({
    push: true,
    email: true,
    sms: true,
  });

  return (
    <SettingSection icon={Bell} title="Notifications">
      <ToggleSwitch
        label="Push notifications"
        isOn={notifications.push}
        onToggle={() => setNotifications({ ...notifications, push: !notifications.push })}
      />

      <ToggleSwitch
        label="Email notifications"
        isOn={notifications.email}
        onToggle={() => setNotifications({ ...notifications, email: !notifications.email })}
      />

      <ToggleSwitch
        label="SMS notifications"
        isOn={notifications.sms}
        onToggle={() => setNotifications({ ...notifications, sms: !notifications.sms })}
      />
    </SettingSection>
  );
};
