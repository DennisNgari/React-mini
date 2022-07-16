//NavBar links for Mobile Devices.
export const navLinkData = [
        {
          label:"Home", 
          link:"/home", 
          tree:"null" 
        },
        {
            label: "About",
            link: null,
            tree: [
                {
                    label: "About Us",
                    link: "/about-us",
                    branches: null,
                },
                {
                  label: "Mission",
                  link: "/mission",
                  branches: null,
              },{
                label: "Vision",
                link: "/vision",
                branches: null,
            },{
              label: "FAQ",
              link: "/faq",
              branches: null,
          },
                {
                    label: "Legal",
                    link: null,
                    branches: [
                        {
                            label: "Terms of Service",
                            link: "/terms-of-service",
                            branches: null,
                        },
                        {
                            label: "Privacy Policy",
                            link: "/privacy-policy",
                            branches: null,
                        },
                        {
                            label: "Return Policy",
                            link: "/return-policy",
                            branches: null,
                        },
                    ],
                },
            ],
        },
        {
            label: "Services",
            link: null,
            tree: [
                {
                    label: "Business and Finance",
                    link: null,
                    branches: [
                        {
                            label: "Academics",
                            link: null,
                            branches: [
                                {
                                    label: "Analytics",
                                    link: "/services/analytics",
                                    branches: null,
                                },
                                {
                                    label: "Thesis",
                                    link: "/services/thesis",
                                    branches: null,
                                },
                                {
                                    label: "Dissertations",
                                    link: "/services/Dissertations",
                                    branches: null,
                                },
                            ],
                        },
                        {
                          label: "Reports",
                          link: "/services/reports",
                          branches: null,
                      },{
                        label: "Presentations",
                        link: "/services/presentations",
                        branches: null,
                    },
                    ],
                },
                {
                    label: "Essays",
                    link: "/essays",
                    branches: null,
                },
                {
                    label: "Pricing",
                    link: null,
                    branches: [
                        {
                            label: "Enterprise",
                            link: "/services/enterprise",
                            branches: null,
                        },
                        {
                            label: "Small Business",
                            link: "/services/small-business",
                            branches: null,
                        },
                    ],
                },
            ],
        },
        {
          label: "Contact",
          link: "/contact",
          tree: null,
      },{
        label: "blog",
        link: "/blog",
        tree: null,
    },
    ];

    //DeskTop Data
    export const Products = [
        {key:1,
          name:"Disertations and Thesis",
          link:"/products"
        }, {key:2,
          name:"Essays",
          link:"/products/essays"
        }, {
          key:3,
          name:"Resume and cv",
          link:"/carrers"
        },
      ]
      export const Services = [
        {
          key:4,
          name:"Business and Finance",
          link:"/data-analysis"
        },
         {key:5,
            name:"Presentations",
            link:"/presentations"
        }, 
        {
          key:6,
          name:"Reports",
          link:"/reports"
        }
      ]

      export const Finance = [
        {
          key:4,
          name:"Data analysis",
          link:"/data-analysis"
        }, {key:5,
            name:"Presentations",
            link:"/presentations"
        }, {
          key:6,
          name:"Reports",
          link:"/reports"
        }
      ]

      export const Legal = [
        {
          key:4,
          name:"Terms of Service",
          link:"/terms-of-service"
        }, {key:5,
            name:"Privacy Policy",
            link:"/privacy-policy"
        }, {
          key:6,
          name:"Return Policy",
          link:"/return-policy"
        }
      ]

      export const Pricing = [
        {
          key:4,
          name:"EnterPrise",
          link:"/enterprise"
        }, {key:5,
            name:" Small Business",
            link:"/small-business"
        }, {
          key:6,
          name:"Return Policy",
          link:"/return-policy"
        }
      ]


 