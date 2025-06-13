"use client";

export default function AboutSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              key.about.whoWeAre
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              key.about.description
            </p>
          </div>

          {/* Two column layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            {/* Left content */}
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                key.about.ourOrigin
              </h3>
              <div className="space-y-4 text-gray-600">
                <p>key.about.originsText1</p>
                <p>key.about.originsText2</p>
                <p>
                  <strong className="text-primary">
                    key.about.todayWeIntegrate
                  </strong>{" "}
                  key.about.integrationText
                </p>
              </div>
            </div>

            {/* Right content - Values */}
            <div className="bg-gray-50 p-8 rounded-xl">
              <h4 className="text-xl font-bold text-gray-900 mb-6">
                key.about.ourValues
              </h4>
              <div className="space-y-6">
                <div className="flex items-start space-x-3">
                  <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-1">
                      key.about.clarity
                    </h5>
                    <p className="text-gray-600 text-sm">
                      key.about.clarityText
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-3 h-3 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-1">
                      key.about.humanity
                    </h5>
                    <p className="text-gray-600 text-sm">
                      key.about.humanityText
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-3 h-3 bg-creative rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-1">
                      key.about.action
                    </h5>
                    <p className="text-gray-600 text-sm">
                      key.about.actionText
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-1">
                      key.about.simplicity
                    </h5>
                    <p className="text-gray-600 text-sm">
                      key.about.simplicityText
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-3 h-3 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-1">
                      key.about.usefulCreativity
                    </h5>
                    <p className="text-gray-600 text-sm">
                      key.about.usefulCreativityText
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats or highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-primary/5 p-8 rounded-xl">
              <div className="text-3xl font-bold text-primary mb-2">35+</div>
              <p className="text-gray-600">key.about.yearsExperience</p>
            </div>
            <div className="bg-accent/5 p-8 rounded-xl">
              <div className="text-3xl font-bold text-accent mb-2">100%</div>
              <p className="text-gray-600">key.about.humanApproach</p>
            </div>
            <div className="bg-creative/5 p-8 rounded-xl">
              <div className="text-3xl font-bold text-creative mb-2">2018</div>
              <p className="text-gray-600">key.about.sinceTeamGalaga</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
