/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useState } from "react";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { Pill, ArrowLeft } from "lucide-react";
import Stepper from "@/components/stepper";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import PharmaForm from "@/components/form/PharmaForm";
import PharmaInput from "@/components/form/PharmaInput";
import Button from "@/components/ui/button";
import PharmaSelect from "@/components/form/PharmaSelect";
import {
  addressSchema,
  incomeInfoSchema,
  personalInfoSchema,
} from "@/schemas/register.schema";

const Register = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});

  function onPersonalInfoSubmit(data: z.infer<typeof personalInfoSchema>) {
    setFormData({ ...formData, ...data });
    setStep(2);
  }

  function onAddressSubmit(data: z.infer<typeof addressSchema>) {
    setFormData({ ...formData, ...data });
    setStep(3);
  }

  function onIncomeInfoSubmit(data: z.infer<typeof incomeInfoSchema>) {
    setFormData({ ...formData, ...data });
    setStep(4);
  }

  const handleFinalSubmit = () => {
    console.log("Final form data:", formData);
  };

  return (
    <div className="min-h-screen bg-slate-50 py-12">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center text-sm text-gray-600 hover:text-gray-900"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </div>

        <div className="flex items-center justify-center mb-8">
          <Pill className="h-6 w-6 text-emerald-600 mr-2" />
          <h1 className="text-2xl font-bold">GovPharm Registration</h1>
        </div>

        <Stepper
          steps={[
            "Personal Information",
            "Address Details",
            "Income Information",
            "Confirmation",
          ]}
          currentStep={step}
        />

        <div className="max-w-2xl mx-auto mt-8">
          {step === 1 && (
            <Card>
              <CardHeader>
                <CardTitle>Personal Information</CardTitle>
                <CardDescription>
                  Please provide your personal details for registration.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <PharmaForm
                  onSubmit={onPersonalInfoSubmit}
                  resolver={zodResolver(personalInfoSchema)}
                >
                  <PharmaInput
                    type="text"
                    name="name"
                    placeholder="Enter your full name"
                    label="Full Name"
                  />
                  <PharmaInput
                    type="text"
                    name="nationalId"
                    placeholder="Enter your national id number"
                    label="National ID"
                  />
                  <PharmaInput
                    type="date"
                    name="dateOfBirth"
                    placeholder="Enter your birth"
                    label="Date of Birth"
                  />
                  <PharmaInput
                    type="date"
                    name="dateOfBirth"
                    placeholder="Enter your birth"
                    label="Date of Birth"
                  />
                  <PharmaInput
                    type="number"
                    name="mobileNumber"
                    placeholder="Enter your mobile number"
                    label="Mobile Number"
                  />
                  <Button type="submit">Submit</Button>
                </PharmaForm>
              </CardContent>
            </Card>
          )}

          {step === 2 && (
            <Card>
              <CardHeader>
                <CardTitle>Address Details</CardTitle>
                <CardDescription>
                  Please provide your address information.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <PharmaForm
                  onSubmit={onAddressSubmit}
                  resolver={zodResolver(addressSchema)}
                >
                  <PharmaSelect
                    name="division"
                    label="Division"
                    options={[
                      { value: "dhaka", label: "Dhaka" },
                      { value: "rajshahi", label: "Rajshahi" },
                      { value: "chatrogram", label: "Chatrogram" },
                    ]}
                  />
                  <PharmaSelect
                    name="district"
                    label="District"
                    options={[
                      { value: "dhaka", label: "Dhaka" },
                      { value: "rajshahi", label: "Rajshahi" },
                      { value: "kushtia", label: "Kushtia" },
                    ]}
                  />
                  <PharmaSelect
                    name="upazila"
                    label="Upazila"
                    options={[
                      { value: "adamdighi", label: "Adamdighi" },
                      { value: "sadar", label: "Sadar" },
                    ]}
                  />
                  <PharmaInput
                    type="text"
                    name="address"
                    placeholder="Enter your address"
                    label="Address"
                  />
                  <PharmaInput
                    type="number"
                    name="postal"
                    placeholder="Enter your postal code"
                    label="Postal Code"
                  />
                  <div className="flex justify-between">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => setStep(1)}
                    >
                      Back
                    </Button>
                    <Button type="submit">Continue</Button>
                  </div>
                </PharmaForm>
              </CardContent>
            </Card>
          )}

          {step === 3 && (
            <Card>
              <CardHeader>
                <CardTitle>Income Information</CardTitle>
                <CardDescription>
                  Please provide your income details for eligibility
                  verification.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <PharmaForm
                  onSubmit={onIncomeInfoSubmit}
                  resolver={zodResolver(incomeInfoSchema)}
                >
                  <PharmaSelect
                    name="monthlyIncome"
                    label="Monthly Income (BDT)"
                    options={[
                      { value: "0-10000", label: "Below 10000" },
                      { value: "10000-20000", label: "10,000-20,000" },
                      { value: "20000-30000", label: "20,000-30,000" },
                    ]}
                    placeholder="Select your income range"
                  />
                  <PharmaSelect
                    name="occupation"
                    label="Occupation"
                    options={[
                      { value: "student", label: "Student" },
                      { value: "government", label: "Government Employee" },
                      { value: "private", label: "Private Employee" },
                    ]}
                    placeholder="Select your occupation"
                  />
                  <PharmaSelect
                    name="familyMembers"
                    label="Number of Fmily Members"
                    options={[
                      { value: "1", label: "1" },
                      { value: "2", label: "2" },
                      { value: "5+", label: "5 or more" },
                    ]}
                    placeholder="Select your occupation"
                  />
                  <div className="flex justify-between">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => setStep(2)}
                    >
                      Back
                    </Button>
                    <Button type="submit">Continue</Button>
                  </div>
                </PharmaForm>
              </CardContent>
            </Card>
          )}

          {step === 4 && (
            <Card>
              <CardHeader>
                <CardTitle>Confirmation</CardTitle>
                <CardDescription>
                  Please review your information and confirm your registration.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="bg-slate-50 p-4 rounded-lg">
                    <h3 className="font-medium text-sm text-slate-500 mb-2">
                      Personal Information
                    </h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm font-medium">Full Name</p>
                        <p className="text-sm">{(formData as any).fullName}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium">National ID</p>
                        <p className="text-sm">
                          {(formData as any).nationalId}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm font-medium">Date of Birth</p>
                        <p className="text-sm">
                          {(formData as any).dateOfBirth}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm font-medium">Gender</p>
                        <p className="text-sm">{(formData as any).gender}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium">Mobile Number</p>
                        <p className="text-sm">
                          {(formData as any).mobileNumber}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-slate-50 p-4 rounded-lg">
                    <h3 className="font-medium text-sm text-slate-500 mb-2">
                      Address Details
                    </h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm font-medium">Division</p>
                        <p className="text-sm">{(formData as any).division}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium">District</p>
                        <p className="text-sm">{(formData as any).district}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium">Upazila/Thana</p>
                        <p className="text-sm">{(formData as any).upazila}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium">Postal Code</p>
                        <p className="text-sm">
                          {(formData as any).postalCode}
                        </p>
                      </div>
                      <div className="col-span-2">
                        <p className="text-sm font-medium">Address</p>
                        <p className="text-sm">{(formData as any).address}</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-slate-50 p-4 rounded-lg">
                    <h3 className="font-medium text-sm text-slate-500 mb-2">
                      Income Information
                    </h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm font-medium">Monthly Income</p>
                        <p className="text-sm">
                          {(formData as any).monthlyIncome}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm font-medium">Occupation</p>
                        <p className="text-sm">
                          {(formData as any).occupation}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm font-medium">Family Members</p>
                        <p className="text-sm">
                          {(formData as any).familyMembers}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-emerald-50 p-4 rounded-lg border border-emerald-200">
                    <p className="text-sm text-emerald-800">
                      By submitting this form, you confirm that all the
                      information provided is accurate and true. Providing false
                      information may result in disqualification from the
                      program.
                    </p>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setStep(3)}
                >
                  Back
                </Button>
                <Button onClick={handleFinalSubmit}>Submit Registration</Button>
              </CardFooter>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};
export default Register;
