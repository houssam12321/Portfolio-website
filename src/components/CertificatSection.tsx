// components/CertificationsSection.tsx
import Certification from '@/components/Certification';
import { certificationsSection } from '@/lib/content/skills';
import { Wrapper } from '@/components';
import { getSectionAnimation } from '@/styles/animations';

const CertificationsSection = () => {
  const { title, certifications } = certificationsSection;

  return (
    <Wrapper id="certifications" {...getSectionAnimation}>
      <h2 className="text-center heading-secondary">{title}</h2>

      <div className="flex flex-wrap justify-between space-x-4 space-y-4 mt-8">
        {certifications.map(({ id, title, issuingOrg, issueDate, credentialUrl }) => (
          <div className="w-full md:w-1/2 lg:w-1/4">
            <Certification
              key={id}
              title={title}
              issuingOrg={issuingOrg}
              issueDate={issueDate}
              credentialUrl={credentialUrl}
              {...getSectionAnimation}
            />
          </div>
        ))}
      </div>
    </Wrapper>
  );
};

export default CertificationsSection;
