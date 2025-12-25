import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '5ff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '5ba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'a2b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c3c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '156'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '88c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '000'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '3d7'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/', '2e1'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/', '2eb'),
    routes: [
      {
        path: '/',
        component: ComponentCreator('/', '6fc'),
        routes: [
          {
            path: '/',
            component: ComponentCreator('/', 'b33'),
            routes: [
              {
                path: '/capstone/expected-outcomes',
                component: ComponentCreator('/capstone/expected-outcomes', '5ca'),
                exact: true,
                sidebar: "textbookSidebar"
              },
              {
                path: '/capstone/project-overview',
                component: ComponentCreator('/capstone/project-overview', 'e46'),
                exact: true,
                sidebar: "textbookSidebar"
              },
              {
                path: '/capstone/system-workflow',
                component: ComponentCreator('/capstone/system-workflow', '17d'),
                exact: true,
                sidebar: "textbookSidebar"
              },
              {
                path: '/intro/learning-outcomes',
                component: ComponentCreator('/intro/learning-outcomes', 'cc4'),
                exact: true,
                sidebar: "textbookSidebar"
              },
              {
                path: '/intro/overview',
                component: ComponentCreator('/intro/overview', '7f8'),
                exact: true,
                sidebar: "textbookSidebar"
              },
              {
                path: '/nvidia-isaac/isaac-ros',
                component: ComponentCreator('/nvidia-isaac/isaac-ros', '47c'),
                exact: true,
                sidebar: "textbookSidebar"
              },
              {
                path: '/nvidia-isaac/isaac-sim',
                component: ComponentCreator('/nvidia-isaac/isaac-sim', 'e84'),
                exact: true,
                sidebar: "textbookSidebar"
              },
              {
                path: '/nvidia-isaac/sim-to-real',
                component: ComponentCreator('/nvidia-isaac/sim-to-real', '5a8'),
                exact: true,
                sidebar: "textbookSidebar"
              },
              {
                path: '/physical-ai/embodied-intelligence',
                component: ComponentCreator('/physical-ai/embodied-intelligence', 'cc8'),
                exact: true,
                sidebar: "textbookSidebar"
              },
              {
                path: '/physical-ai/what-is-physical-ai',
                component: ComponentCreator('/physical-ai/what-is-physical-ai', '38d'),
                exact: true,
                sidebar: "textbookSidebar"
              },
              {
                path: '/physical-ai/why-physical-ai-matters',
                component: ComponentCreator('/physical-ai/why-physical-ai-matters', '504'),
                exact: true,
                sidebar: "textbookSidebar"
              },
              {
                path: '/ros2/nodes-topics-services',
                component: ComponentCreator('/ros2/nodes-topics-services', '402'),
                exact: true,
                sidebar: "textbookSidebar"
              },
              {
                path: '/ros2/ros2-overview',
                component: ComponentCreator('/ros2/ros2-overview', 'f6d'),
                exact: true,
                sidebar: "textbookSidebar"
              },
              {
                path: '/ros2/urdf-introduction',
                component: ComponentCreator('/ros2/urdf-introduction', 'e04'),
                exact: true,
                sidebar: "textbookSidebar"
              },
              {
                path: '/simulation/digital-twin',
                component: ComponentCreator('/simulation/digital-twin', 'e89'),
                exact: true,
                sidebar: "textbookSidebar"
              },
              {
                path: '/simulation/gazebo',
                component: ComponentCreator('/simulation/gazebo', '273'),
                exact: true,
                sidebar: "textbookSidebar"
              },
              {
                path: '/simulation/sensor-simulation',
                component: ComponentCreator('/simulation/sensor-simulation', 'e27'),
                exact: true,
                sidebar: "textbookSidebar"
              },
              {
                path: '/simulation/unity',
                component: ComponentCreator('/simulation/unity', '624'),
                exact: true,
                sidebar: "textbookSidebar"
              },
              {
                path: '/vla/cognitive-planning',
                component: ComponentCreator('/vla/cognitive-planning', '426'),
                exact: true,
                sidebar: "textbookSidebar"
              },
              {
                path: '/vla/vision-language-action',
                component: ComponentCreator('/vla/vision-language-action', 'a48'),
                exact: true,
                sidebar: "textbookSidebar"
              },
              {
                path: '/vla/voice-to-action',
                component: ComponentCreator('/vla/voice-to-action', '4c1'),
                exact: true,
                sidebar: "textbookSidebar"
              },
              {
                path: '/',
                component: ComponentCreator('/', 'c48'),
                exact: true
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
