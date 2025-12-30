import { ShieldCheck, FileText, Users, Globe, Lock, Eye, Phone } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-gradient-start/10 to-gradient-end/10 py-16">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <ShieldCheck className="h-16 w-16 text-gradient-start" />
            </div>
            <h1 className="lg:text-5xl text-4xl font-bold text-gray-800 mb-4">
              Privacy Policy
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Your privacy is important to us. Learn how we collect, use, and protect your information.
            </p>
            <div className="mt-4 px-4 py-2 bg-blue-50 rounded-lg inline-block">
              <p className="text-sm text-blue-800">
                <strong>Last Updated:</strong> December 30, 2025
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto">
          
          {/* Introduction */}
          <section className="mb-12">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                CoverageTrackr ("CoverageTrackr", "we", "our", or "us") provides a digital platform for planning, executing, monitoring, and evaluating field programs, including public health campaigns, surveys, and service delivery interventions. The platform includes a web-based administrative portal and a mobile application for field operations.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                This Privacy Policy describes how information is collected, used, stored, disclosed, and protected when individuals or organizations use the CoverageTrackr platform and related services (collectively, the "Services").
              </p>
            </div>
          </section>

          {/* Section 1: Applicability and Scope */}
          <section className="mb-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <Globe className="h-8 w-8 text-gradient-start mr-3" />
                <h2 className="text-3xl font-bold text-gray-800">1. Applicability and Scope</h2>
              </div>
              
              <p className="text-gray-700 mb-4">This Privacy Policy applies to:</p>
              
              <div className="bg-slate-50 rounded-lg p-6 mb-6">
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-gradient-start rounded-full mr-3"></div>
                    <span>The CoverageTrackr web application</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-gradient-start rounded-full mr-3"></div>
                    <span>The CoverageTrackr mobile application</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-gradient-start rounded-full mr-3"></div>
                    <span>All services, tools, and features provided under the CoverageTrackr brand</span>
                  </li>
                </ul>
              </div>
              
              <p className="text-gray-700">
                CoverageTrackr is primarily designed for use by organizations, including governments, development partners, non-governmental organizations, and implementing agencies. Individual users (e.g., enumerators, supervisors, validators, administrators) access the platform under the authority and direction of their organization.
              </p>
            </div>
          </section>

          {/* Section 2: Data Controller and Processor */}
          <section className="mb-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <Users className="h-8 w-8 text-gradient-start mr-3" />
                <h2 className="text-3xl font-bold text-gray-800">2. Data Controller and Data Processor Roles</h2>
              </div>
              
              <p className="text-gray-700 mb-4">For the purposes of applicable data protection laws:</p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-blue-800 mb-3">Data Controllers</h3>
                  <p className="text-blue-700">
                    Organizations using CoverageTrackr are the Data Controllers with respect to program and field data.
                  </p>
                </div>
                <div className="bg-green-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-green-800 mb-3">Data Processor</h3>
                  <p className="text-green-700">
                    CoverageTrackr acts as a Data Processor, processing data strictly on behalf of, and according to the instructions of, the Data Controller.
                  </p>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-lg">
                <p className="text-amber-800">
                  <strong>Note:</strong> CoverageTrackr does not determine the purpose or scope of field data collection and does not independently use such data beyond providing the Services.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3: Information We Collect */}
          <section className="mb-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <FileText className="h-8 w-8 text-gradient-start mr-3" />
                <h2 className="text-3xl font-bold text-gray-800">3. Information We Collect</h2>
              </div>

              {/* 3.1 Account Information */}
              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">3.1 Account and Identity Information</h3>
                <p className="text-gray-700 mb-4">To enable access to the Services, we may process:</p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-slate-50 rounded-lg p-4">
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-gradient-end rounded-full mr-3"></div>
                        <span>Full name</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-gradient-end rounded-full mr-3"></div>
                        <span>Username</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-gradient-end rounded-full mr-3"></div>
                        <span>Email address</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-gradient-end rounded-full mr-3"></div>
                        <span>Phone number</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-slate-50 rounded-lg p-4">
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-gradient-end rounded-full mr-3"></div>
                        <span>Role or designation</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-gradient-end rounded-full mr-3"></div>
                        <span>Organization affiliation</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-gradient-end rounded-full mr-3"></div>
                        <span>Authentication credentials</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <p className="text-gray-600 text-sm mt-4 italic">
                  User accounts are typically created and managed by organization administrators.
                </p>
              </div>

              {/* 3.2 Field Program Data */}
              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">3.2 Field Program and Campaign Data</h3>
                <p className="text-gray-700 mb-4">Depending on campaign configuration, CoverageTrackr may process data including but not limited to:</p>
                
                <div className="bg-slate-50 rounded-lg p-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                        <span>Household and individual records</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                        <span>Demographic information</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                        <span>Service delivery records</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                        <span>Validation and verification responses</span>
                      </li>
                    </ul>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                        <span>Observational notes and comments</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                        <span>Structured survey or form responses</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                        <span>Media files such as photos (where enabled)</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-red-800">
                    <strong>Important:</strong> Such data may include sensitive or regulated data, including health-related information, depending on the nature of the campaign.
                  </p>
                </div>
              </div>

              {/* 3.3 Geospatial Data */}
              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">3.3 Geospatial and Location Data</h3>
                <p className="text-gray-700 mb-4">CoverageTrackr may collect and process:</p>
                
                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-green-50 rounded-lg p-4 text-center">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Globe className="h-6 w-6 text-green-600" />
                    </div>
                    <h4 className="font-semibold text-green-800">GPS Coordinates</h4>
                    <p className="text-sm text-green-700">Captured during field activities</p>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-4 text-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <FileText className="h-6 w-6 text-blue-600" />
                    </div>
                    <h4 className="font-semibold text-blue-800">Location Metadata</h4>
                    <p className="text-sm text-blue-700">Linked to submissions</p>
                  </div>
                  <div className="bg-purple-50 rounded-lg p-4 text-center">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Users className="h-6 w-6 text-purple-600" />
                    </div>
                    <h4 className="font-semibold text-purple-800">Geospatial Assignments</h4>
                    <p className="text-sm text-purple-700">Grids, areas, facilities</p>
                  </div>
                </div>
                
                <div className="bg-green-50 rounded-lg p-6">
                  <h4 className="font-semibold text-green-800 mb-3">Location data is collected:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                      <span className="text-green-700">Only during active use of the mobile application</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                      <span className="text-green-700">Only for operational purposes</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                      <span className="text-green-700">Only with explicit user permission</span>
                    </li>
                  </ul>
                </div>
                
                <p className="text-gray-600 mt-4">
                  CoverageTrackr does not collect location data for advertising or background surveillance.
                </p>
              </div>

              {/* 3.4 Device and Technical Data */}
              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">3.4 Device and Technical Data</h3>
                <p className="text-gray-700 mb-4">We may automatically collect:</p>
                
                <div className="bg-slate-50 rounded-lg p-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                        <span>Device type and operating system</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                        <span>Application version</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                        <span>Non-advertising device identifiers</span>
                      </li>
                    </ul>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                        <span>Log files, crash reports, and error diagnostics</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                        <span>Timestamps and synchronization metadata</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <p className="text-gray-600 mt-4">
                  This data is used solely to ensure system performance, stability, and security.
                </p>
              </div>

              {/* 3.5 Offline Data Handling */}
              <div className="mb-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">3.5 Offline Data Handling</h3>
                <p className="text-gray-700 mb-4">The CoverageTrackr mobile application supports offline data collection. When offline:</p>
                
                <div className="bg-orange-50 rounded-lg p-6">
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="w-3 h-3 bg-orange-400 rounded-full mr-3 mt-1"></div>
                      <span className="text-orange-800">Data may be temporarily stored on the device</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-3 h-3 bg-orange-400 rounded-full mr-3 mt-1"></div>
                      <span className="text-orange-800">Data is encrypted or protected using application-level safeguards</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-3 h-3 bg-orange-400 rounded-full mr-3 mt-1"></div>
                      <span className="text-orange-800">Data is transmitted securely once connectivity is restored</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Section 4: How We Use Information */}
          <section className="mb-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <Eye className="h-8 w-8 text-gradient-start mr-3" />
                <h2 className="text-3xl font-bold text-gray-800">4. How We Use Information</h2>
              </div>
              
              <p className="text-gray-700 mb-6">Information processed through CoverageTrackr is used to:</p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-3 h-3 bg-gradient-start rounded-full mr-3 mt-2"></div>
                    <span>Enable data collection, validation, and service delivery</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-3 h-3 bg-gradient-start rounded-full mr-3 mt-2"></div>
                    <span>Support microplanning and operational decision-making</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-3 h-3 bg-gradient-start rounded-full mr-3 mt-2"></div>
                    <span>Assign tasks and manage workflows</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-3 h-3 bg-gradient-start rounded-full mr-3 mt-2"></div>
                    <span>Generate dashboards, analytics, and reports</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-3 h-3 bg-gradient-end rounded-full mr-3 mt-2"></div>
                    <span>Ensure accountability and auditability of field activities</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-3 h-3 bg-gradient-end rounded-full mr-3 mt-2"></div>
                    <span>Maintain platform functionality and security</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-3 h-3 bg-gradient-end rounded-full mr-3 mt-2"></div>
                    <span>Comply with legal, contractual, and regulatory obligations</span>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <p className="text-blue-800">
                  <strong>Important:</strong> CoverageTrackr does not use collected data for advertising, profiling, or commercial resale.
                </p>
              </div>
            </div>
          </section>

          {/* Remaining sections with consistent styling */}
          <section className="mb-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <FileText className="h-8 w-8 text-gradient-start mr-3" />
                <h2 className="text-3xl font-bold text-gray-800">5. Legal Basis for Processing</h2>
              </div>
              
              <p className="text-gray-700 mb-4">Depending on jurisdiction, data processing is based on:</p>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-slate-50 rounded-lg p-4">
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="w-3 h-3 bg-indigo-400 rounded-full mr-3 mt-1"></div>
                      <span>Performance of contractual obligations</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-3 h-3 bg-indigo-400 rounded-full mr-3 mt-1"></div>
                      <span>Legitimate interests related to public service delivery</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-slate-50 rounded-lg p-4">
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="w-3 h-3 bg-indigo-400 rounded-full mr-3 mt-1"></div>
                      <span>Compliance with legal requirements</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-3 h-3 bg-indigo-400 rounded-full mr-3 mt-1"></div>
                      <span>Consent, where required (e.g., device permissions)</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <p className="text-gray-600 mt-4">
                Organizations are responsible for obtaining any required consent from data subjects.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <Users className="h-8 w-8 text-gradient-start mr-3" />
                <h2 className="text-3xl font-bold text-gray-800">6. Data Sharing and Disclosure</h2>
              </div>
              
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                <p className="text-red-800 font-semibold">
                  CoverageTrackr does not sell or rent personal or field data.
                </p>
              </div>
              
              <p className="text-gray-700 mb-4">Data may be disclosed only:</p>
              
              <div className="space-y-3">
                <div className="flex items-start">
                  <div className="w-3 h-3 bg-red-400 rounded-full mr-3 mt-2"></div>
                  <span>To authorized users within the owning organization</span>
                </div>
                <div className="flex items-start">
                  <div className="w-3 h-3 bg-red-400 rounded-full mr-3 mt-2"></div>
                  <span>To trusted service providers (e.g., hosting, security, analytics) under strict confidentiality agreements</span>
                </div>
                <div className="flex items-start">
                  <div className="w-3 h-3 bg-red-400 rounded-full mr-3 mt-2"></div>
                  <span>Where required by law, regulation, or court order</span>
                </div>
                <div className="flex items-start">
                  <div className="w-3 h-3 bg-red-400 rounded-full mr-3 mt-2"></div>
                  <span>To protect the rights, safety, or integrity of users, organizations, or the platform</span>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <Globe className="h-8 w-8 text-gradient-start mr-3" />
                <h2 className="text-3xl font-bold text-gray-800">7. International Data Transfers</h2>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-3 h-3 bg-green-400 rounded-full mr-3 mt-2"></div>
                  <span>CoverageTrackr may host or process data on secure cloud infrastructure located in multiple jurisdictions.</span>
                </div>
                <div className="flex items-start">
                  <div className="w-3 h-3 bg-green-400 rounded-full mr-3 mt-2"></div>
                  <span>Where cross-border data transfers occur, appropriate safeguards are applied in accordance with applicable laws.</span>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <FileText className="h-8 w-8 text-gradient-start mr-3" />
                <h2 className="text-3xl font-bold text-gray-800">8. Data Retention</h2>
              </div>
              
              <p className="text-gray-700 mb-4">Data retention periods are primarily determined by the Data Controller (the organization). CoverageTrackr retains data:</p>
              
              <div className="bg-slate-50 rounded-lg p-6">
                <div className="space-y-3">
                  <div className="flex items-start">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full mr-3 mt-1"></div>
                    <span>For the duration of active campaigns</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full mr-3 mt-1"></div>
                    <span>As required by contractual agreements</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full mr-3 mt-1"></div>
                    <span>As necessary for audit, compliance, or legal purposes</span>
                  </div>
                </div>
              </div>
              
              <p className="text-gray-600 mt-4">
                Data deletion or export requests are handled in accordance with contractual terms.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <Lock className="h-8 w-8 text-gradient-start mr-3" />
                <h2 className="text-3xl font-bold text-gray-800">9. Data Security Measures</h2>
              </div>
              
              <p className="text-gray-700 mb-6">CoverageTrackr implements administrative, technical, and organizational safeguards, including:</p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="bg-green-50 rounded-lg p-4">
                    <div className="flex items-center mb-2">
                      <Lock className="h-5 w-5 text-green-600 mr-2" />
                      <h4 className="font-semibold text-green-800">Encryption</h4>
                    </div>
                    <p className="text-sm text-green-700">Encrypted data transmission (HTTPS/TLS)</p>
                  </div>
                  
                  <div className="bg-blue-50 rounded-lg p-4">
                    <div className="flex items-center mb-2">
                      <ShieldCheck className="h-5 w-5 text-blue-600 mr-2" />
                      <h4 className="font-semibold text-blue-800">Authentication</h4>
                    </div>
                    <p className="text-sm text-blue-700">Secure authentication and access controls</p>
                  </div>
                  
                  <div className="bg-purple-50 rounded-lg p-4">
                    <div className="flex items-center mb-2">
                      <Users className="h-5 w-5 text-purple-600 mr-2" />
                      <h4 className="font-semibold text-purple-800">Access Control</h4>
                    </div>
                    <p className="text-sm text-purple-700">Role-based access management</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-orange-50 rounded-lg p-4">
                    <div className="flex items-center mb-2">
                      <FileText className="h-5 w-5 text-orange-600 mr-2" />
                      <h4 className="font-semibold text-orange-800">Data Isolation</h4>
                    </div>
                    <p className="text-sm text-orange-700">Organizational data isolation</p>
                  </div>
                  
                  <div className="bg-indigo-50 rounded-lg p-4">
                    <div className="flex items-center mb-2">
                      <Eye className="h-5 w-5 text-indigo-600 mr-2" />
                      <h4 className="font-semibold text-indigo-800">Monitoring</h4>
                    </div>
                    <p className="text-sm text-indigo-700">Activity logging and audit trails</p>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-center mb-2">
                      <Globe className="h-5 w-5 text-gray-600 mr-2" />
                      <h4 className="font-semibold text-gray-800">Infrastructure</h4>
                    </div>
                    <p className="text-sm text-gray-700">Secure cloud infrastructure and backups</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <p className="text-yellow-800">
                  While no system can guarantee absolute security, we continuously review and improve our safeguards.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <ShieldCheck className="h-8 w-8 text-gradient-start mr-3" />
                <h2 className="text-3xl font-bold text-gray-800">10. Data Subject Rights</h2>
              </div>
              
              <p className="text-gray-700 mb-6">Subject to applicable laws, individuals may have rights to:</p>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex items-start">
                    <div className="w-3 h-3 bg-blue-400 rounded-full mr-3 mt-1"></div>
                    <span>Access personal data</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-3 h-3 bg-blue-400 rounded-full mr-3 mt-1"></div>
                    <span>Request correction of inaccurate information</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-3 h-3 bg-blue-400 rounded-full mr-3 mt-1"></div>
                    <span>Request deletion or restriction of processing</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <div className="w-3 h-3 bg-blue-400 rounded-full mr-3 mt-1"></div>
                    <span>Object to certain processing activities</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-3 h-3 bg-blue-400 rounded-full mr-3 mt-1"></div>
                    <span>Withdraw consent where applicable</span>
                  </div>
                </div>
              </div>
              
              <p className="text-gray-600 mt-4">
                Requests should be directed to the relevant organization or to CoverageTrackr using the contact details below.
              </p>
            </div>
          </section>

          {/* Remaining sections - simplified for brevity but maintaining structure */}
          <section className="mb-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">11. Children and Vulnerable Populations</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-3 h-3 bg-red-400 rounded-full mr-3 mt-2"></div>
                  <span>CoverageTrackr is not intended for direct use by children.</span>
                </div>
                <div className="flex items-start">
                  <div className="w-3 h-3 bg-red-400 rounded-full mr-3 mt-2"></div>
                  <span>Any data relating to children or vulnerable individuals is collected under organizational authority and in compliance with applicable laws and ethical standards.</span>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">12. Mobile Application Permissions</h2>
              <p className="text-gray-700 mb-4">The CoverageTrackr mobile application may request permissions including:</p>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-slate-50 rounded-lg p-4">
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <Globe className="h-4 w-4 mr-2 text-blue-500" />
                      <span>Location access</span>
                    </li>
                    <li className="flex items-center">
                      <Eye className="h-4 w-4 mr-2 text-green-500" />
                      <span>Camera access</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-slate-50 rounded-lg p-4">
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <FileText className="h-4 w-4 mr-2 text-purple-500" />
                      <span>Storage access</span>
                    </li>
                    <li className="flex items-center">
                      <Globe className="h-4 w-4 mr-2 text-orange-500" />
                      <span>Network access</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <p className="text-gray-600 mt-4">
                Permissions are used strictly for operational functionality and may be managed through device settings.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">13. Third-Party Services</h2>
              <p className="text-gray-700">
                CoverageTrackr may integrate third-party services (e.g., mapping services, cloud infrastructure providers) solely to deliver and maintain the Services. Such providers are contractually bound to data protection obligations.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">14. Changes to This Privacy Policy</h2>
              <p className="text-gray-700">
                This Privacy Policy may be updated periodically. Updates will be posted on this page with a revised "Last Updated" date.
              </p>
            </div>
          </section>

          {/* Contact Section */}
          <section className="mb-8">
            <div className="bg-gradient-to-r from-gradient-start/10 to-gradient-end/10 rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <Phone className="h-8 w-8 text-gradient-start mr-3" />
                <h2 className="text-3xl font-bold text-gray-800">15. Contact Information</h2>
              </div>
              
              <p className="text-gray-700 mb-6">For privacy-related inquiries, please contact:</p>
              
              <div className="bg-white rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">CoverageTrackr Privacy Office</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-gradient-start rounded-full mr-3"></div>
                    <span><strong>Email:</strong> sydani.technologies@gmail.com</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-gradient-start rounded-full mr-3"></div>
                    <span><strong>Website:</strong> www.coveragetrackr.com</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}