"use client";

import { useState } from "react";
import { Separator } from "@/components/ui/separator";
import { AlertTriangle } from "lucide-react";
import PharmaInput from "@/components/form/PharmaInput";
import ToggleSwitch from "@/components/ui/switch";
import Button from "@/components/ui/button";
import PharmaForm from "@/components/form/PharmaForm";

export default function SettingsPage() {
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false);

  const handleAccountDeletion = () => {
    const confirmed = confirm(
      "Are you sure you want to delete your account? This action cannot be undone."
    );
    if (confirmed) {
      // Add deletion logic here
      console.log("Account deleted");
    }
  };

  return (
    <section className="space-y-8 max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold">Settings</h1>

      {/* Profile Info */}
      <div className="space-y-2">
        <h2 className="text-lg font-semibold">Profile Information</h2>
        <PharmaForm onSubmit={() => {}}>
          <PharmaInput
            label="Full Name"
            placeholder="John Doe"
            name="name"
            type="text"
          />
          <PharmaInput
            type="email"
            label="Email"
            placeholder="john@example.com"
            name="email"
          />
        </PharmaForm>
      </div>

      <Separator />

      {/* Preferences */}
      <div className="space-y-2">
        <h2 className="text-lg font-semibold">Preferences</h2>
        <div className="flex items-center justify-between">
          <span>Dark Mode</span>
          <ToggleSwitch checked={darkMode} onCheckedChange={setDarkMode} />
        </div>
        <div className="flex items-center justify-between">
          <span>Notifications</span>
          <ToggleSwitch
            checked={notifications}
            onCheckedChange={setNotifications}
          />
        </div>
      </div>

      <Separator />

      {/* 2FA */}
      <div className="space-y-2">
        <h2 className="text-lg font-semibold">Two-Factor Authentication</h2>
        <div className="flex items-center justify-between">
          <span>Enable 2FA</span>
          <ToggleSwitch
            checked={twoFactorEnabled}
            onCheckedChange={setTwoFactorEnabled}
          />
        </div>
        {twoFactorEnabled && (
          <p className="text-sm text-muted-foreground">
            You&lsquo;ll be required to verify your identity when logging in.
          </p>
        )}
      </div>

      <Separator />

      {/* Password */}
      <div className="space-y-2">
        <h2 className="text-lg font-semibold">Change Password</h2>
        <PharmaForm onSubmit={() => {}}>
          <PharmaInput
            type="password"
            label="Current Password"
            placeholder="*****"
            name="password"
          />
          <PharmaInput
            type="password"
            label="New Password"
            placeholder="********"
            name="newPassword"
          />
          <PharmaInput
            type="password"
            label="Confirm New Password"
            placeholder="*****"
            name="confirmPassword"
          />
          <Button variant="outline">Update Password</Button>
        </PharmaForm>
      </div>

      <Separator />

      {/* Account Deletion */}
      <div className="space-y-2">
        <h2 className="text-lg font-semibold text-red-600">Danger Zone</h2>
        <p className="text-sm text-muted-foreground">
          Deleting your account is permanent and will remove all your data.
        </p>
        <Button
          variant="destructive"
          onClick={handleAccountDeletion}
          className="flex items-center gap-2"
        >
          <AlertTriangle className="w-4 h-4" /> Delete Account
        </Button>
      </div>
    </section>
  );
}
