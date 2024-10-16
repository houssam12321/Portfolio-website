// components/Certification.tsx
interface CertificationProps {
  title: string;
  issuingOrg: string;
  issueDate: string;
  credentialUrl: string;
}

const Certification: React.FC<CertificationProps> = ({
  title,
  issuingOrg,
  issueDate,
  credentialUrl,
}) => (
  <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 certification">
    <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{title}</h3>
    <p className="text-sm text-gray-600 dark:text-gray-400">Issued by: {issuingOrg}</p>
    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">Date: {issueDate}</p>
    <a
      href={credentialUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-500 hover:text-blue-600 transition-colors"
    >
      View Credential
    </a>
  </div>
);

export default Certification;
