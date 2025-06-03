// "use client";

// import type React from "react";

// import { useState } from "react";
// import { Button } from "@/components/ui/button";
// import { Checkbox } from "@/components/ui/checkbox";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Textarea } from "@/components/ui/textarea";

// const ContactSection = () => {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     phone: "",
//     message: "",
//     agreeToPolicy: false,
//   });

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleCheckboxChange = (checked: boolean) => {
//     setFormData((prev) => ({ ...prev, agreeToPolicy: checked }));
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     // Handle form submission - would connect to an API in a real implementation
//     console.log("Form submitted:", formData);
//     // Reset form or show success message
//   };

//   return (
//     <section
//       id="contact"
//       className="w-full py-12 md:py-24"
//       aria-labelledby="contact-heading">
//       <div className="container px-4 md:px-6 mx-auto">
//         <div className="max-w-md mx-auto">
//           <div className="text-center mb-8">
//             <span className="text-sm font-medium text-muted-foreground">
//               Reach Out to Me!
//             </span>
//             <h2
//               id="contact-heading"
//               className="mt-2 text-3xl font-bold tracking-tight">
//               I&apos;m Here to Help
//             </h2>
//             <p className="mt-3 text-muted-foreground text-sm">
//               Have a project in mind? Let’s connect and make it happen.
//             </p>
//           </div>

//           <form onSubmit={handleSubmit} className="space-y-6">
//             <div className="grid grid-cols-2 gap-4">
//               <div className="space-y-2">
//                 <Label htmlFor="firstName">
//                   First Name <span className="text-red-500">*</span>
//                 </Label>
//                 <Input
//                   id="firstName"
//                   name="firstName"
//                   placeholder="Your First Name"
//                   value={formData.firstName}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>

//               <div className="space-y-2">
//                 <Label htmlFor="lastName">
//                   Last Name <span className="text-red-500">*</span>
//                 </Label>
//                 <Input
//                   id="lastName"
//                   name="lastName"
//                   placeholder="Your Last Name"
//                   value={formData.lastName}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>
//             </div>

//             <div className="space-y-2">
//               <Label htmlFor="email">
//                 Email Address <span className="text-red-500">*</span>
//               </Label>
//               <Input
//                 id="email"
//                 name="email"
//                 type="email"
//                 placeholder="Your Email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//               />
//             </div>

//             <div className="space-y-2">
//               <Label htmlFor="message">
//                 Your Message <span className="text-red-500">*</span>
//               </Label>
//               <Textarea
//                 id="message"
//                 name="message"
//                 placeholder="Let us know how we can assist you"
//                 value={formData.message}
//                 onChange={handleChange}
//                 required
//                 rows={4}
//               />
//             </div>

//             <div className="flex items-center space-x-2">
//               <Checkbox
//                 id="agreeToPolicy"
//                 checked={formData.agreeToPolicy}
//                 onCheckedChange={handleCheckboxChange}
//                 required
//               />
//               <Label htmlFor="agreeToPolicy" className="text-sm font-normal">
//                 I agree to the{" "}
//                 <a href="#" className="text-primary hover:underline">
//                   privacy policy
//                 </a>
//               </Label>
//             </div>

//             <Button
//               type="submit"
//               className="w-full bg-primary hover:bg-primary/90 transition-colors"
//               disabled={
//                 !formData.agreeToPolicy ||
//                 !formData.firstName ||
//                 !formData.lastName ||
//                 !formData.email ||
//                 !formData.message
//               }
//               aria-label="Submit Contact Form">
//               Submit
//             </Button>
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ContactSection;

"use client";

import type React from "react";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

// Firebase will be loaded from CDN - declare global types
declare global {
  interface Window {
    firebase: any;
  }
}

// Firebase configuration - Replace with your actual config
const firebaseConfig = {
  apiKey: "AIzaSyBl630jcLbeJg-qy13OxfmYVHKqCTB4qfU",
  authDomain: "luwen-vercel.firebaseapp.com",
  databaseURL:
    "https://luwen-vercel-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "luwen-vercel",
  storageBucket: "luwen-vercel.firebasestorage.app",
  messagingSenderId: "820881113272",
  appId: "1:820881113272:web:e1ba3e6b8b4d5f6550b44d",
};

// Initialize Firebase (will be done after CDN loads)
let database: any = null;
let firebaseInitialized = false;

// Initialize Firebase after CDN scripts load
const initializeFirebase = () => {
  if (
    typeof window !== "undefined" &&
    window.firebase &&
    !firebaseInitialized
  ) {
    try {
      const app = window.firebase.initializeApp(firebaseConfig);
      database = window.firebase.database();
      firebaseInitialized = true;
      console.log("Firebase initialized successfully");
    } catch (error) {
      console.error("Firebase initialization error:", error);
    }
  }
};

const ContactSection = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    agreeToPolicy: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [firebaseReady, setFirebaseReady] = useState(false);

  // Initialize Firebase when component mounts
  useEffect(() => {
    // Check if scripts are already loaded
    if (typeof window !== "undefined" && window.firebase) {
      if (!firebaseInitialized) {
        initializeFirebase();
      }
      setFirebaseReady(true);
      return;
    }

    // Load Firebase CDN scripts
    const loadFirebaseScripts = async () => {
      if (typeof window === "undefined") return;

      try {
        console.log("Starting Firebase script loading...");

        // Check if scripts already exist
        const existingAppScript = document.querySelector(
          'script[src*="firebase-app"]'
        );
        const existingDbScript = document.querySelector(
          'script[src*="firebase-database"]'
        );

        if (!existingAppScript) {
          console.log("Loading Firebase App script...");
          await new Promise<void>((resolve, reject) => {
            const appScript = document.createElement("script");
            appScript.src =
              "https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js";
            appScript.crossOrigin = "anonymous";
            appScript.onload = () => {
              console.log("Firebase App script loaded successfully");
              resolve();
            };
            appScript.onerror = (error) => {
              console.error("Failed to load Firebase App script:", error);
              reject(new Error("Firebase App script failed to load"));
            };
            document.head.appendChild(appScript);
          });
        }

        if (!existingDbScript) {
          console.log("Loading Firebase Database script...");
          await new Promise<void>((resolve, reject) => {
            const dbScript = document.createElement("script");
            dbScript.src =
              "https://www.gstatic.com/firebasejs/9.23.0/firebase-database-compat.js";
            dbScript.crossOrigin = "anonymous";
            dbScript.onload = () => {
              console.log("Firebase Database script loaded successfully");
              resolve();
            };
            dbScript.onerror = (error) => {
              console.error("Failed to load Firebase Database script:", error);
              reject(new Error("Firebase Database script failed to load"));
            };
            document.head.appendChild(dbScript);
          });
        }

        // Wait for Firebase to be available with better error handling
        let attempts = 0;
        const maxAttempts = 20; // Increased attempts

        console.log("Waiting for Firebase to be available...");
        while (!window.firebase && attempts < maxAttempts) {
          await new Promise((resolve) => setTimeout(resolve, 250)); // Longer wait intervals
          attempts++;
          console.log(
            `Attempt ${attempts}/${maxAttempts} - Firebase available:`,
            !!window.firebase
          );
        }

        if (window.firebase) {
          console.log("Firebase is now available, initializing...");
          initializeFirebase();
          setFirebaseReady(true);
        } else {
          throw new Error(
            `Firebase failed to load after ${maxAttempts} attempts`
          );
        }
      } catch (error) {
        console.error("Firebase loading error:", error);
        setSubmitStatus("error");

        // Try alternative approach with a timeout
        setTimeout(() => {
          if (window.firebase && !firebaseInitialized) {
            console.log(
              "Firebase became available after error, initializing..."
            );
            initializeFirebase();
            setFirebaseReady(true);
            setSubmitStatus("idle");
          }
        }, 2000);
      }
    };

    loadFirebaseScripts();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (checked: boolean) => {
    setFormData((prev) => ({ ...prev, agreeToPolicy: checked }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!firebaseReady || !database) {
      console.error("Firebase not ready yet. Please wait and try again.");
      setSubmitStatus("error");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Create a reference to the 'contacts' node in your database
      const contactsRef = database.ref("contacts");

      // Prepare the data to be saved
      const contactData = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
        timestamp: window.firebase.database.ServerValue.TIMESTAMP,
        createdAt: new Date().toISOString(),
      };

      // Push the data to Firebase
      await contactsRef.push(contactData);

      console.log("Contact form submitted successfully to Firebase");
      setSubmitStatus("success");

      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
        agreeToPolicy: false,
      });
    } catch (error) {
      console.error("Error submitting form to Firebase:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="w-full py-12 md:py-24"
      aria-labelledby="contact-heading">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-8">
            <span className="text-sm font-medium text-muted-foreground">
              Reach Out to Me!
            </span>
            <h2
              id="contact-heading"
              className="mt-2 text-3xl font-bold tracking-tight">
              I&apos;m Here to Help
            </h2>
            <p className="mt-3 text-muted-foreground text-sm">
              Have a project in mind? Let's connect and make it happen.
            </p>
          </div>

          {/* Success/Error Messages */}
          {submitStatus === "success" && (
            <div className="mb-6 p-4 bg-green-100 border border-green-200 rounded-md">
              <p className="text-green-800 text-sm">
                Thank you! Your message has been sent successfully.
              </p>
            </div>
          )}

          {submitStatus === "error" && (
            <div className="mb-6 p-4 bg-red-100 border border-red-200 rounded-md">
              <p className="text-red-800 text-sm">
                {!firebaseReady
                  ? "Firebase is still loading. Please wait a moment and try again."
                  : "Sorry, there was an error sending your message. Please try again."}
              </p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">
                  First Name <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="firstName"
                  name="firstName"
                  placeholder="Your First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="lastName">
                  Last Name <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="lastName"
                  name="lastName"
                  placeholder="Your Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">
                Email Address <span className="text-red-500">*</span>
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                placeholder="Your Phone Number (Optional)"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">
                Your Message <span className="text-red-500">*</span>
              </Label>
              <Textarea
                id="message"
                name="message"
                placeholder="Let us know how we can assist you"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
              />
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox
                id="agreeToPolicy"
                checked={formData.agreeToPolicy}
                onCheckedChange={handleCheckboxChange}
                required
              />
              <Label htmlFor="agreeToPolicy" className="text-sm font-normal">
                I agree to the{" "}
                <a href="#" className="text-primary hover:underline">
                  privacy policy
                </a>
              </Label>
            </div>

            <Button
              type="submit"
              className="w-full bg-primary hover:bg-primary/90 transition-colors"
              disabled={
                isSubmitting ||
                !firebaseReady ||
                !formData.agreeToPolicy ||
                !formData.firstName ||
                !formData.lastName ||
                !formData.email ||
                !formData.message
              }
              aria-label="Submit Contact Form">
              {isSubmitting
                ? "Submitting..."
                : firebaseReady
                ? "Submit"
                : "Loading..."}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
