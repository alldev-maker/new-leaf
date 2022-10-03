import React from "react";
import Layout from "../components/Layout";

function QuestionsPage() {
  const bowlCss = `
        .cls-1{fill:#e88324;}.cls-2{fill:#aacdec;}.cls-3{fill:#507453;}.cls-4{fill:none;stroke:#b4b4b4;stroke-miterlimit:10;stroke-width:0.3px;}
    `;

  return (
    <Layout>
      <section className="mx-auto xl:flex max-w-screen-2xl">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 360 360"
          className="w-full xl:w-1/2 mb-1/24 lg:mb-8"
        >
          <defs>
            <style>{bowlCss}</style>
          </defs>
          <g id="Layer_1" data-name="Layer 1">
            <polygon
              class="cls-1"
              points="360 360.15 0 360.15 360 0.15 360 360.15"
            />
            <path
              class="cls-2"
              d="M180.14,120.05a59.75,59.75,0,0,1,42.39,17.56L360.14,0H.14V360L137.75,222.39a59.95,59.95,0,0,1,42.39-102.34Z"
            />
            <path
              class="cls-3"
              d="M180.14,360a180,180,0,0,0,180-180H.14A180,180,0,0,0,180.14,360Z"
            />
          </g>
          <g id="Layer_2" data-name="Layer 2">
            <line class="cls-4" y1="359.85" x2="360" y2="359.85" />
            <line class="cls-4" y1="0.15" x2="360" y2="0.15" />
            <line class="cls-4" y1="60.1" x2="360" y2="60.1" />
            <line class="cls-4" y1="120.05" x2="360" y2="120.05" />
            <line class="cls-4" y1="180" x2="360" y2="180" />
            <line class="cls-4" y1="239.95" x2="360" y2="239.95" />
            <line class="cls-4" y1="299.9" x2="360" y2="299.9" />
            <line class="cls-4" x1="0.15" y1="360" x2="0.15" />
            <line class="cls-4" x1="60.1" y1="360" x2="60.1" />
            <line class="cls-4" x1="120.05" y1="360" x2="120.05" />
            <line class="cls-4" x1="180" y1="360" x2="180" />
            <line class="cls-4" x1="239.95" y1="360" x2="239.95" />
            <line class="cls-4" x1="299.9" y1="360" x2="299.9" />
            <line class="cls-4" x1="359.85" y1="360" x2="359.85" />
          </g>
        </svg>
        <div className="w-11/12 mx-auto green-color xl:w-1/2 xl:px-1/24">
          <h2 className="mb-4 font-serif text-3xl lg:text-5xl lg:leading-snug">
            Frequently asked questions
          </h2>
          <p>Curiosity is Encouraged</p>

          <p>
            We’re here to make this process as easy as possible for you,
            especially if this is your first venture into the wonderful world of
            naturopathy.
          </p>

          <p>
            Here’s a handy list of frequently asked questions, to help you
            officially turn a New Leaf (ba-doom-tsh).
          </p>
        </div>
      </section>
      <section className="w-11/12 mx-auto max-w-screen-2xl">
        <dl>
          <div className="py-4 md:grid md:grid-cols-12 md:gap-8 border-b border-black">
            <dt className="font-serif text-xl lg:text-4xl md:col-span-5">
              What does a naturopath do?
            </dt>
            <dd className="mt-2 md:mt-0 md:col-span-7">
              <p>
                A naturopath is a highly trained health practitioner with
                qualifications in herbal medicine and clinical nutrition. They
                treat each patient individually and address the underlying cause
                of disease as well as its symptoms.
              </p>
            </dd>
          </div>
          <div className="py-4 md:grid md:grid-cols-12 md:gap-8 border-b border-black">
            <dt className="font-serif text-xl lg:text-4xl md:col-span-5">
              Do I have to take herbs?
            </dt>
            <dd className="mt-2 md:mt-0 md:col-span-7">
              <p>
                Well, yes, and of course, no… we prescribe a lot of them. If you
                take herbs, they’ll be especially designed for your needs. We
                create bespoke herbal remedies from our dispensary, which
                contains over 120 different herbal tinctures
              </p>
            </dd>
          </div>
          <div className="py-4 md:grid md:grid-cols-12 md:gap-8 border-b border-black">
            <dt className="font-serif text-xl lg:text-4xl md:col-span-5">
              How can you help me?
            </dt>
            <dd className="mt-2 md:mt-0 md:col-span-7">
              <p>
                Our practitioners will explore every detail of your health concerns and all
                aspects of your health and its history. Treatments may include
                nutritional and herbal medicine, lifestyle and food
                recommendations.
              </p>
            </dd>
          </div>
          <div className="py-4 md:grid md:grid-cols-12 md:gap-8 border-b border-black">
            <dt className="font-serif text-xl lg:text-4xl md:col-span-5">
              Will you just tell me to meditate more (or less?!)
            </dt>
            <dd className="mt-2 md:mt-0 md:col-span-7">
              <p>
                Sure, sometimes we will advise meditation, but not for
                everyone. Really, it depends.
              </p>
              <p>
                This isn’t cookie-cutter health. It's about looking at what you
                have on your plate at this moment and figuring out how we can
                make life easier, not more complicated. We aim to arm you with
                practical and realistic tools that you can integrate into your
                existing life - sometimes meditation is part of that, or part of
                the end goal - but it’s all part of a larger health journey.
              </p>
            </dd>
          </div>
          <div className="py-4 md:grid md:grid-cols-12 md:gap-8 border-b border-black">
            <dt className="font-serif text-xl lg:text-4xl md:col-span-5">
              How much in an initial appointment?
            </dt>
            <dd className="mt-2 md:mt-0 md:col-span-7">
              <p>
                Initial appointments are $220. You can read more about our
                appointment types <a href="/clinic-bookings">here</a>.
              </p>
            </dd>
          </div>
          <div className="py-4 md:grid md:grid-cols-12 md:gap-8 border-b border-black">
            <dt className="font-serif text-xl lg:text-4xl md:col-span-5">
              How long will my appointments be?
            </dt>
            <dd className="mt-2 md:mt-0 md:col-span-7">
              <p>
                Your initial appointment will be 90 minutes - because of the
                level of detail we go into, we can’t make them any shorter.
                Ongoing appointments will be between 30-60 minutes. It’s
                important that you arrive on time to get the most of your
                allocated slot.
              </p>
            </dd>
          </div>
          <div className="py-4 md:grid md:grid-cols-12 md:gap-8 border-b border-black">
            <dt className="font-serif text-xl lg:text-4xl md:col-span-5">
              How do I prepare for my appointment?
            </dt>
            <dd className="mt-2 md:mt-0 md:col-span-7">
              <p>
                In your welcome email, you’ll receive your telehealth link -
                just click it and go.
              </p>
              <p>
                If you have trouble connecting, we’ll know pretty quickly and
                have backup solutions ready to go to get our appointment started
                on time. Please get comfy, have a good internet connection, a
                fully charged battery and quiet surrounds so we can hear you
                clearly. We like you to be in a private space, not walking or
                driving - set yourself up with a cup of tea, a notepad and pen,
                and let's begin.
              </p>
            </dd>
          </div>
          <div className="py-4 md:grid md:grid-cols-12 md:gap-8 border-b border-black">
            <dt className="font-serif text-xl lg:text-4xl md:col-span-5">
              What should I bring to my appointment?
            </dt>
            <dd className="mt-2 md:mt-0 md:col-span-7">
              <p>Bring yourself - all of it. We want to know all about you. </p>
              <p>
                We’ll ask you to fill out your new patient form as soon as you
                get your welcome letter. We’ll also ask you to scan and email
                any pathology or medical results as a PDF as soon as possible.
                Note: please send us any updated results at least two days
                before your appointment to ensure we have time to review it
                before we chat.
              </p>
            </dd>
          </div>
          <div className="py-4 md:grid md:grid-cols-12 md:gap-8 border-b border-black">
            <dt className="font-serif text-xl lg:text-4xl md:col-span-5">
              Can I get a rebate with my Private Health Insurance?
            </dt>
            <dd className="mt-2 md:mt-0 md:col-span-7">
              <p>At the moment, unfortunately not.</p>
              <p>
                As of 1st April 2019, the Australian government has changed how
                you can claim for your treatments with Naturopaths from your
                private health fund.
              </p>
              <p>
                We’ve been working hard to have this decision reversed, and are
                confident it will be at some point in the near future. Please
                contact your health insurance and your local member of
                parliament to speak with them about how you can help reverse
                this decision.
              </p>
            </dd>
          </div>
          <div className="py-4 md:grid md:grid-cols-12 md:gap-8 border-b border-black">
            <dt className="font-serif text-xl lg:text-4xl md:col-span-5">
              Do you offer telehealth?
            </dt>
            <dd className="mt-2 md:mt-0 md:col-span-7">
              <p>
                We only offer telehealth. All of our appointments are done
                online via our secure telehealth system. We’ll let you know when
                we can offer face-to-face consultations again, but we promise
                that TeleHealth works just as well as IRL.
              </p>
            </dd>
          </div>
          <div className="py-4 md:grid md:grid-cols-12 md:gap-8 border-b border-black">
            <dt className="font-serif text-xl lg:text-4xl md:col-span-5">
              What herbs do you use?
            </dt>
            <dd className="mt-2 md:mt-0 md:col-span-7">
              <p>
                We choose only the best quality herbs available in Australia. We
                opt for organic and wildcrafted where possible, and ensure that
                the herbs we choose are sustainably sourced. We’ll never use
                endangered species, or herbs that are heading that way.
              </p>
            </dd>
          </div>
          <div className="py-4 md:grid md:grid-cols-12 md:gap-8 border-b border-black">
            <dt className="font-serif text-xl lg:text-4xl md:col-span-5">
              Are they safe?
            </dt>
            <dd className="mt-2 md:mt-0 md:col-span-7">
              <p>
                Like many medicines, herbal medicines are only safe if used
                correctly.
              </p>
              <p>
                As professionally trained herbalists, we are qualified to
                formulate and prescribe herbal medicines for our patients. Each
                prescription considers your presenting symptoms, your underlying
                conditions, and any contraindications with medication or other
                supplements you may be taking. Herbal medicine is really the
                people’s medicine, but it should be prescribed by a professional
                to ensure therapeutic and positive results.
              </p>
            </dd>
          </div>
          <div className="py-4 md:grid md:grid-cols-12 md:gap-8 border-b border-black">
            <dt className="font-serif text-xl lg:text-4xl md:col-span-5">
              I think I’ve had a reaction to my medicines, what should I do?
            </dt>
            <dd className="mt-2 md:mt-0 md:col-span-7">
              <p>
                First thing: stop all the medicines you’re taking, and assess
                whether you need medical assistance.{" "}
              </p>
              <p>
                Reactions to herbal medicine and supplements are rare, but not
                impossible. We all react differently to things.
              </p>
              <p>
                Secondly, please get in touch with us as soon as possible so we
                can assist you and help you feel better quickly.
              </p>
            </dd>
          </div>
          <div className="py-4 md:grid md:grid-cols-12 md:gap-8 border-b border-black">
            <dt className="font-serif text-xl lg:text-4xl md:col-span-5">
              How can I get in touch to ask questions before my appointment?
            </dt>
            <dd className="mt-2 md:mt-0 md:col-span-7">
              <p>
                You can email the clinic at <a href="mailto:gethealthy@new-leaf.com.au">gethealthy@new-leaf.com.au</a> to ask a
                few questions before your appointment. We suggest having a good
                read of our website as it really does sum out what we’re about.
                We are not available for pre-consult chats, as we are often
                seeing clients.
              </p>
            </dd>
          </div>
          <div className="py-4 md:grid md:grid-cols-12 md:gap-8 border-b border-black">
            <dt className="font-serif text-xl lg:text-4xl md:col-span-5">
              Can I book online?
            </dt>
            <dd className="mt-2 md:mt-0 md:col-span-7">
              <p>
                Yes - please do - our booking system is easy to use, and our
                website is awesome (if we do say so ourselves). You’ll be asked
                to pay for your appointment at the time of booking via our
                secure payment system. Once you book, you’ll receive all the
                information you need for your appointment including new patient
                forms and a telehealth link.
              </p>
            </dd>
          </div>
          <div className="py-4 md:grid md:grid-cols-12 md:gap-8 border-b border-black">
            <dt className="font-serif text-xl lg:text-4xl md:col-span-5">
              Do we have experience in treating my condition?
            </dt>
            <dd className="mt-2 md:mt-0 md:col-span-7">
              <p>
                We have experience in treating a variety of conditions. Our
                extensive training and ongoing education ensure that she has a
                deep understanding of the human body. When it comes to hormone
                health, mental health, fertility and preconception, autoimmunity
                or digestive health, you can be confident in the fact that
                we have most likely worked with similar patients before.
              </p>
            </dd>
          </div>
          <div className="py-4 md:grid md:grid-cols-12 md:gap-8 border-b border-black">
            <dt className="font-serif text-xl lg:text-4xl md:col-span-5">
              What if I need to cancel or change my appointment?
            </dt>
            <dd className="mt-2 md:mt-0 md:col-span-7">
              <p>
                Please contact the clinic to move or cancel your appointment at
                <a href="mailto:gethealthy@new-leaf.com.au">gethealthy@new-leaf.com.au</a>. If you’ve prepaid and need a refund,
                this will be arranged as well. We just ask for as much notice as
                possible if you need to change any bookings to ensure that we
                can let the next person on the waitlist know.
              </p>
            </dd>
          </div>
          <div className="py-4 md:grid md:grid-cols-12 md:gap-8 border-b border-black">
            <dt className="font-serif text-xl lg:text-4xl md:col-span-5">
              How much notice do I need to give if I can’t make my appointment?
            </dt>
            <dd className="mt-2 md:mt-0 md:col-span-7">
              <p>
                Our booking T&Cs means you need to tell us 24 hours before your
                appointment if you can’t make it. You may be asked to pay for
                the full cost of your appointment if you cancel with little
                notice or do not arrive at your appointment. We understand that
                life happens, and always consider your individual situation.
              </p>
            </dd>
          </div>
          <div className="py-4 md:grid md:grid-cols-12 md:gap-8 border-b border-black">
            <dt className="font-serif text-xl lg:text-4xl md:col-span-5">
              What is a baby platypus called?
            </dt>
            <dd className="mt-2 md:mt-0 md:col-span-7">
              <p>
                A puggle! Who doesn’t love platypus? Platypi? We’ve never seen
                baby ones, but always see platypus at our favourite secret camp
                spot on the Turon River.
              </p>
            </dd>
          </div>
        </dl>
      </section>
    </Layout>
  );
}

export default QuestionsPage;
