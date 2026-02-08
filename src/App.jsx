import { Suspense, lazy } from "react";
import { Outlet, createBrowserRouter } from "react-router-dom";
import Error from "./components/Error";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { PageProvider } from "./context/pageContext";
import ProjectorMotorized from "./components/ProjectorMotorized";
import ProjectorFixed from "./components/ProjectorFixed";
import CableManager from "./components/CableManager";
import ManualScreen from "./components/ManualScreen";
import PortableScreen from "./components/PortableScreen";
import FormatScreen from "./components/FormatScreen";
import FoldingBigScreen from "./components/FoldingBigScreen";
//import ProductsPage from "./components/ProductsPage";
//import SpeakerCable from "./components/SpeakerCable";
//import MicrophoneCable from "./components/MicrophoneCable";
//import SnakeCable from "./components/SnakeCable";
// import DMXCable from "./components/DMXCable";
// import RGCable from "./components/RGCable";
// import UTPCable from "./components/UTPCable";
//import ConnectorEP from "./components/ConnectorEP";
//import ConnectorXLR from "./components/ConnectorXLR";
//import ConnectorPage from "./components/ConnectorPage";
// import StereoJack from "./components/StereoJack";
// import MonoJack from "./components/MonoJack";
// import SpeakOn from "./components/SpeakOn";
// import AmpRack from "./components/AmpRack";
// import FloorBox from "./components/FloorBox";
// import CablesPage from "./components/CablesPage";
// import ProductsPage from "./components/ProductsPage";
// import ProjectorScreenPage from "./components/ProjectorScreenPage";

const Contact = lazy(() => import("./components/Contact"));
const AboutUsPage = lazy(() => import("./components/AboutUsPage"));
const SpeakerCable = lazy(() => import("./components/SpeakerCable"));
const MicrophoneCable = lazy(() => import("./components/MicrophoneCable"));
const SnakeCable = lazy(() => import("./components/SnakeCable"));
const ConnectorEP = lazy(() => import("./components/ConnectorEP"));
const ConnectorXLR = lazy(() => import("./components/ConnectorXLR"));
const ConnectorPage = lazy(() => import("./components/ConnectorPage"));
const DMXCable = lazy(() => import("./components/DMXCable"));
const RGCable = lazy(() => import("./components/RGCable"));
const UTPCable = lazy(() => import("./components/UTPCable"));
const StereoJack = lazy(() => import("./components/StereoJack"));
const MonoJack = lazy(() => import("./components/MonoJack"));
const SpeakOn = lazy(() => import("./components/SpeakOn"));
const AmpRack = lazy(() => import("./components/AmpRack"));
const FloorBox = lazy(() => import("./components/FloorBox"));
const CablesPage = lazy(() => import("./components/CablesPage"));
const ProductsPage = lazy(() => import("./components/ProductsPage"));
const ProjectorScreenPage = lazy(() => import("./components/ProjectorScreenPage"));

const AppLayout = ({ component, pageProps }) => {
  return (
    <div className="app-wrapper">
      <PageProvider>
        <Header {...pageProps} />
        <main className="main-content">
          <Outlet {...pageProps} />
        </main>
        <Footer {...pageProps} />
      </PageProvider>
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/", // This is the root path, no need for it to be repeated here
        element: <Body />,
      },
      {
        path : "/contact",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Contact />
          </Suspense>
        )
      },
      {
        path : "/about",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <AboutUsPage />
          </Suspense>
        )
      },
      {
        path: "/products",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <ProductsPage/>
          </Suspense>
        )
      },
      {
        path: "/cables",
        element: <Suspense fallback={<h1>Loading...</h1>}>
                    <CablesPage />,
                 </Suspense>
        
      },
      {
        path: "/speaker-cable",
        element:<Suspense fallback={<h1>Loading...</h1>}>
                  <SpeakerCable />
                </Suspense>,
      },
      {
        path:"/microphone-cable",
        element:<Suspense fallback={<h1>Loading...</h1>}>
                  <MicrophoneCable />,
                </Suspense>
        
      },
      {
        path:"/snake-cable",
        element:<Suspense fallback={<h1>Loading...</h1>}>
                  <SnakeCable/>,
                </Suspense>
      },
      {
        path:"/dmx-cable",
        element: <Suspense fallback={<h1>Loading...</h1>}>
                  <DMXCable/>,
                </Suspense>
      },
      {
        path:"/rg-cable",
        element: <Suspense fallback={<h1>Loading...</h1>}>
                  <RGCable />,
                </Suspense>
      },
      {
        path:"/utp-cable",
        element: <Suspense fallback={<h1>Loading...</h1>}>
                    <UTPCable />,
                  </Suspense>
      },
      {
        path:"/connectors",
        element: <Suspense fallback={<h1>Loading...</h1>}>
            <ConnectorPage />,
        </Suspense>
        
      },
      {
        path: "/ep-connector",
        element: <Suspense fallback={<h1>Loading...</h1>}>
          <ConnectorEP />,
          </Suspense>
      },
      {
        path: "/xlr-connector",
        element:<Suspense fallback={<h1>Loading...</h1>}>
        <ConnectorXLR />,
        </Suspense>
      },
      
      {
        path:"/sj-connector",
        element: <Suspense fallback={<h1>Loading...</h1>}>
        <StereoJack />,
        </Suspense>
      },
      {
        path:"/mj-connector",
        element: <Suspense fallback={<h1>Loading...</h1>}>
        <MonoJack />,
        </Suspense>
      },
      {
        path: "/speakon-connector",
        element: <Suspense fallback={<h1>Loading...</h1>}>
        <SpeakOn />,
        </Suspense>
      },
      {
        path: "/product-amp-rack",
        element: <Suspense fallback={<h1>Loading...</h1>}>
          <AmpRack />
          </Suspense>
      },
      {
        path: "/product-floor-box",
        element: <Suspense fallback={<h1>Loading...</h1>}>
        <FloorBox />
        </Suspense>
      },
      {
        path: "/product-projector-screen",
        element: <Suspense fallback={<h1>Loading...</h1>}>
        <ProjectorScreenPage />
        </Suspense>
      },
      {
        path: "/motorized-screen",
        element: <Suspense fallback={<h1>Loading...</h1>}>
        <ProjectorMotorized />
        </Suspense>
      },
      {
        path: "/fixed-screen",
        element: <Suspense fallback={<h1>Loading...</h1>}>
        <ProjectorFixed />
        </Suspense>
      },
      {
        path: "/manual-screen",
        element: <Suspense fallback={<h1>Loading...</h1>}>
        <ManualScreen />
        </Suspense>
      },
      {
        path: "/portable-screen",
        element: <Suspense fallback={<h1>Loading...</h1>}>
        <PortableScreen />
        </Suspense>
      },
      {
        path: "/format-screen",
        element: <Suspense fallback={<h1>Loading...</h1>}>
        <FormatScreen />
        </Suspense>
      },
      {
        path: "/folding-screen",
        element: <Suspense fallback={<h1>Loading...</h1>}>
        <FoldingBigScreen />
        </Suspense>
      },
      {
        path: "/product-cable-manager",
        element: <Suspense fallback={<h1>Loading...</h1>}>
        <CableManager />
        </Suspense>
      },

    ],
    errorElement: <Error />,
  },
]);


export { appRouter };
