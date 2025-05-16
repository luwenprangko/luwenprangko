"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const ContactSection = () => {
	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		email: "",
		phone: "",
		message: "",
		agreeToPolicy: false,
	});

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const handleCheckboxChange = (checked: boolean) => {
		setFormData((prev) => ({ ...prev, agreeToPolicy: checked }));
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// Handle form submission - would connect to an API in a real implementation
		console.log("Form submitted:", formData);
		// Reset form or show success message
	};

	return (
		<section
			id="contact"
			className="w-full py-12 md:py-24"
			aria-labelledby="contact-heading"
		>
			<div className="container px-4 md:px-6 mx-auto">
				<div className="max-w-md mx-auto">
					<div className="text-center mb-8">
						<span className="text-sm font-medium text-muted-foreground">
							Reach Out to Us
						</span>
						<h2
							id="contact-heading"
							className="mt-2 text-3xl font-bold tracking-tight"
						>
							We&apos;re Here to Help
						</h2>
						<p className="mt-3 text-muted-foreground text-sm">
							Please fill out the form below, and we will get back to you soon.
						</p>
					</div>

					<form onSubmit={handleSubmit} className="space-y-6">
						<div className="grid grid-cols-2 gap-4">
							<div className="space-y-2">
								<Label htmlFor="firstName">
									First Name <span className="text-primary">*</span>
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
									Last Name <span className="text-primary">*</span>
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
								Email Address <span className="text-primary">*</span>
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
							<Label htmlFor="phone">
								Contact Number <span className="text-primary">*</span>
							</Label>
							<Input
								id="phone"
								name="phone"
								type="tel"
								placeholder="+123 456 7890"
								value={formData.phone}
								onChange={handleChange}
								required
							/>
						</div>

						<div className="space-y-2">
							<Label htmlFor="message">
								Your Message <span className="text-primary">*</span>
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
							className="w-full bg-black hover:bg-black/90 text-white"
						>
							Submit
						</Button>
					</form>
				</div>
			</div>
		</section>
	);
};

export default ContactSection;
