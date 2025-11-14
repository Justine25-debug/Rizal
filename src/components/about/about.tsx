import React, { useState } from 'react'

const About: React.FC = () => {
	const initialFormState = {
		name: '',
		email: '',
		message: '',
	}

	const [formData, setFormData] = useState(initialFormState)
	const [statusMessage, setStatusMessage] = useState<string | null>(null)

	const handleChange = (
		event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => {
		const { name, value } = event.target
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}))

		if (statusMessage) {
			setStatusMessage(null)
		}
	}

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		setStatusMessage("Thanks for reaching out! I'll respond as soon as possible.")
		setFormData(initialFormState)
	}

	return (
		<section
			id="about"
			className="bg-white px-6 py-16 text-[#1A120B] sm:px-10 sm:py-20 lg:px-16 lg:py-25"
		>
			<div className="mx-auto flex w-full max-w-6xl flex-col gap-12 md:flex-row md:items-start md:gap-14">
				<div className="md:w-5/12 lg:w-4/12">
					<div className="space-y-4 text-center md:text-left">
						<div className="mx-auto flex w-fit flex-col items-center gap-4 md:mx-0 md:items-start">
							<h2 className="bebas-neue-regular w-fit text-4xl font-semibold uppercase leading-tight tracking-[.21em] text-[#A72703] sm:text-4xl">
								About This Website
							</h2>
							<img
								src="/icon.gif"
								alt="Animated icon illustrating José Rizal"
								className="h-auto w-full"
								loading="lazy"
								decoding="async"
							/>

							<p className="atkinson-hyperlegible-mono-regular text-sm font-medium uppercase tracking-[.19em] text-[#3D2A1C]">
								Created by Justine Carl H. Gasque
							</p>

						</div>
					</div>
				</div>
				<div className="atkinson-hyperlegible-mono-regular space-y-6 text-justify leading-relaxed text-[#3D2A1C] sm:text-lg md:w-7/12">
					<p>
                        This website is a non-commercial, educational project dedicated to Dr. José Rizal, providing centralized information about his life, works, and legacy. All content presented here is used under the principles of fair use for education and historical study.
                    </p>
                    <p>
                        If you are a copyright holder and wish for your material to be credited properly or removed, please contact me using the form below.
                    </p>
					<form
						onSubmit={handleSubmit}
						className="space-y-6 rounded-xl border border-[#A72703]/20 bg-[#FFF8F5] p-6 shadow-sm transition-colors hover:border-[#A72703]/40 focus-within:border-[#A72703]/60"
					>
						<div className="grid gap-5 sm:grid-cols-2">
							<label className="flex flex-col text-sm font-semibold uppercase tracking-widest text-[#A72703]">
								Name
								<input
									type="text"
									name="name"
									required
									value={formData.name}
									onChange={handleChange}
									placeholder="Juan Dela Cruz"
									className="mt-2 rounded-lg border border-[#3D2A1C]/20 bg-white px-4 py-3 text-base text-[#1A120B] transition-colors focus:border-[#A72703] focus:outline-none focus:ring-2 focus:ring-[#A72703]/30"
								/>
							</label>
							<label className="flex flex-col text-sm font-semibold uppercase tracking-widest text-[#A72703]">
								Email
								<input
									type="email"
									name="email"
									required
									value={formData.email}
									onChange={handleChange}
									placeholder="juan@example.com"
									className="mt-2 rounded-lg border border-[#3D2A1C]/20 bg-white px-4 py-3 text-base text-[#1A120B] transition-colors focus:border-[#A72703] focus:outline-none focus:ring-2 focus:ring-[#A72703]/30"
								/>
							</label>
							<label className="sm:col-span-2 flex flex-col text-sm font-semibold uppercase tracking-widest text-[#A72703]">
								Message
								<textarea
									name="message"
									required
									rows={5}
									value={formData.message}
									onChange={handleChange}
									placeholder="Share the details of your request here."
									className="mt-2 rounded-lg border border-[#3D2A1C]/20 bg-white px-4 py-3 text-base text-[#1A120B] transition-colors focus:border-[#A72703] focus:outline-none focus:ring-2 focus:ring-[#A72703]/30 resize-none"
								/>
							</label>
						</div>
						<div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
							<button
								type="submit"
								className="w-full rounded-lg bg-[#A72703] px-6 py-3 text-sm font-semibold uppercase tracking-widest text-white transition-colors hover:bg-[#7F1E02] focus:outline-none focus:ring-2 focus:ring-[#A72703]/40 sm:w-auto"
							>
								Send Message
							</button>
							{statusMessage && (
								<span
									className="text-sm font-medium text-[#A72703]"
									aria-live="polite"
								>
									{statusMessage}
								</span>
							)}
						</div>
					</form>
				</div>
			</div>
		</section>
	)
}

export default About
