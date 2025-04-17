"use client";
import { useState } from "react";
import { Separator } from "@/components/ui/separator";
import { AlertTriangle } from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import Image from "next/image";
import Button from "@/components/ui/button";
import PharmaInput from "@/components/form/PharmaInput";
import ToggleSwitch from "@/components/ui/switch";
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
      console.log("Account deleted");
    }
  };

  return (
    <section className="space-y-10 max-w-4xl mx-auto p-6 md:p-10 bg-white dark:bg-gray-900 rounded-xl shadow-lg">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
        Settings
      </h1>

      <Tabs defaultValue="profile" className="w-full">
        <TabsList className="flex gap-4 mb-6 border-b pb-2 dark:border-gray-700">
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="activity">Activity</TabsTrigger>
          <TabsTrigger value="preferences">Preferences</TabsTrigger>
        </TabsList>

        {/* Profile Tab */}
        <TabsContent value="profile">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <Image
                src="/avatar-placeholder.png"
                alt="Profile Picture"
                width={64}
                height={64}
                className="rounded-full object-cover"
              />
              <Button variant="outline">Change Photo</Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                <PharmaInput
                  type="tel"
                  label="Phone"
                  placeholder="+1234567890"
                  name="phone"
                />
                <PharmaInput
                  label="Address"
                  placeholder="123 Main St, Springfield"
                  name="address"
                  type="text"
                />
              </PharmaForm>
            </div>

            <div>
              <textarea
                placeholder="Short Bio"
                className="w-full border border-gray-300 dark:border-gray-700 rounded-lg p-2 dark:bg-gray-800 dark:text-white"
                rows={4}
                defaultValue="Enthusiastic user of modern health platforms."
              />
            </div>

            <Button className="w-full sm:w-auto">Save Changes</Button>
          </div>
        </TabsContent>

        {/* Activity Tab */}
        <TabsContent value="activity">
          <p className="text-gray-600 dark:text-gray-400">
            Recent user activity will appear here...
          </p>
        </TabsContent>

        {/* Preferences Tab */}
        <TabsContent value="preferences">
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
                Preferences
              </h2>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Dark Mode
                  </span>
                  <ToggleSwitch
                    checked={darkMode}
                    onCheckedChange={setDarkMode}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Notifications
                  </span>
                  <ToggleSwitch
                    checked={notifications}
                    onCheckedChange={setNotifications}
                  />
                </div>
              </div>
            </div>

            <Separator />

            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
                Two-Factor Authentication
              </h2>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Enable 2FA
                </span>
                <ToggleSwitch
                  checked={twoFactorEnabled}
                  onCheckedChange={setTwoFactorEnabled}
                />
              </div>
              {twoFactorEnabled && (
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  You&lsquo;ll be required to verify your identity when logging
                  in.
                </p>
              )}
            </div>

            <Separator />

            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-red-600">
                Danger Zone
              </h2>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Deleting your account is permanent and will remove all your
                data.
              </p>
              <Button
                variant="destructive"
                onClick={handleAccountDeletion}
                className="flex items-center gap-2"
              >
                <AlertTriangle className="w-4 h-4" /> Delete Account
              </Button>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </section>
  );
}
