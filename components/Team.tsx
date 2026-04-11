import React from 'react';

type TeamMember = {
  name: string;
  initials: string;
  title: string;
  specialty: string;
};

const teamMembers: TeamMember[] = [
  {
    name: 'Dr. Sarah Chen',
    initials: 'SC',
    title: 'Director of Research',
    specialty: 'Renewable Energy Systems',
  },
  {
    name: 'Prof. Michael Rodriguez',
    initials: 'MR',
    title: 'Head of Solar Technologies',
    specialty: 'Photovoltaic Engineering',
  },
  {
    name: 'Dr. Amara Okafor',
    initials: 'AO',
    title: 'Lead Carbon Capture Scientist',
    specialty: 'Chemical Engineering',
  },
  {
    name: 'Dr. James Liu',
    initials: 'JL',
    title: 'Energy Storage Director',
    specialty: 'Battery Technology',
  },
];

const Team = () => {
  return (
    <section className="bg-background py-16 sm:py-20">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="text-center">
          <h2 className="text-3xl font-bold leading-tight text-primary sm:text-4xl lg:text-5xl">
            Leadership Team
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-primary/80 sm:text-lg">
            World-class experts driving innovation in zero-carbon technologies
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4">
          {teamMembers.map((member) => (
            <div key={member.name} className="flex flex-col items-center rounded-2xl border border-primary/10 bg-background/80 p-8 shadow-sm shadow-chart-1/10">
              <div className="flex h-24 w-24 items-center justify-center rounded-full bg-chart-1">
                <span className="text-2xl font-bold text-white">{member.initials}</span>
              </div>
              <h3 className="mt-6 text-center text-lg font-bold text-primary">{member.name}</h3>
              <p className="mt-2 text-center text-sm font-semibold text-chart-1">{member.title}</p>
              <p className="mt-2 text-center text-sm text-primary/75">{member.specialty}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;