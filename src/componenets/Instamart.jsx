import { useContext, useState } from "react";
import userContext from "../utils/userContext";

const Section = ({ description, title, isVisible, setIsVisible }) => {
  return (
    <div className="border border-black m-4 p-2 bg-backColor">
      <h1 className="font-bold text-2xl">{title}</h1>

      {isVisible ? (
        <button
          className="font-bold underline"
          onClick={() => {
            setIsVisible(false);
          }}
        >
          hide
        </button>
      ) : (
        <button
          className="font-bold underline"
          onClick={() => {
            setIsVisible(true);
          }}
        >
          show
        </button>
      )}

      {isVisible && <p className="font-semibold bg-backColor">{description}</p>}
    </div>
  );
};

const Instamart = () => {
  const { user } = useContext(userContext);

  const [visbleSection, setVisibleSection] = useState({
    about: false,
    life: false,
    carere: false,
  });

  const settoggleSection = (section) => {
    const updatedVisibleSection = {
      about: false,
      life: false,
      carere: false,
      [section]: !visbleSection[section],
    };
    setVisibleSection(updatedVisibleSection);
  };

  return (
    <div className="bg-backColor h-full mb-[-6p0x]">
      <div className="w-full h-[258px] bg-backColor items-center text-center flex justify-center flex-col">
        <h1 className="font-bold ">
          {" "}
          This is Instamart and this future is coming soon.......
        </h1>
        <br />
        <h1 className="font-bold text-3xl">{user.name}</h1>
        <h1 className="font-bold text-3xl">{user.email}</h1>
      </div>
      <Section
        title={"about"}
        description={
          "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."
        }
        isVisible={visbleSection.about}
        setIsVisible={() => settoggleSection("about")}
      />
      <Section
        title={"carere"}
        description={
          "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."
        }
        isVisible={visbleSection.carere}
        setIsVisible={() => settoggleSection("carere")}
      />

      <Section
        title={"life"}
        description={
          "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."
        }
        isVisible={visbleSection.life}
        setIsVisible={() => settoggleSection("life")}
      />
    </div>
  );
};
//
// //
// ///
// //
// //
// //
// //
// //
// //
// //
// ///
// ///
// ///
// ///
// ///
// // /
// // /
// // /
// /
// /
// /
// /
// //
// /
// /
// /
// /
// /
// /
// /
// /
// /
// /
// //
// /
// /
// /
// /

// /
// ///
// /
// /
// ///
// //
// /
// /
// //
// /
// /
// /
// /
// /
// /
// /
// /
// /
// /
// /
// /
// /
// /
// /
// /
// /
// /
// //
// //
// /
// /
// /
// /
// /
// /
// /////
// /
// //
// /
// /
// /
// /
// /
// /
// /
// /

// /
// /
// /
// /
// /
// /
// /
// /
// //
// //
// /
// /
// /
// /
// /
// /
// /
// /
// /
// /

export default Instamart;

// import { useState } from "react";

// const Section = ({ title, discription }) => {
//   const [isVisible, setIsVisible] = useState(false);
//   return (
//     <div className="border border-black p-2 m-2">
//       <h3 className="text-xl font-bold">{title}</h3>

//     {isVisible? (<button
//         className=" underline"
//         onClick={() => setIsVisible(false)}
//       >
//         Hide
//       </button>)
//       :
//       (<button
//         className=" underline"
//         onClick={() => setIsVisible(true)}
//       >
//         Show
//       </button>)}

//       {isVisible && <p>{discription}</p>}
//     </div>
//   );
// };

// const Instamart = () => {
//   return (
//     <>
//       <h1 className="text-3xl p-2 m-2 font-bold">Instamart</h1>
//       <Section
//         title={"About Instamart"}
//         discription={
//           "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains"
//         }
//       />

//       <Section
//         title={"Team Instamart"}
//         discription={
//           "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains"
//         }
//       />

//       <Section
//         title={"Career Instamart"}
//         discription={
//   //     "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains"
//   }
// />
//     </>
//   );
// };

// export default Instamart;

// import { useState } from "react";

// const Section = ({ title, discription, isVisible, setIsVisible }) => {

//   return (
//     <div className="border border-black p-2 m-2">
//       <h3 className="text-xl font-bold">{title}</h3>

//     {isVisible? (<button
//         className=" underline"
//         onClick={() => setIsVisible(false)}
//       >
//         Hide
//       </button>)
//       :
//       (<button
//         className=" underline"
//         onClick={() => setIsVisible(true)}
//       >
//         Show
//       </button>)}

//       {isVisible && <p>{discription}</p>}
//     </div>
//   );
// };

// const Instamart = () => {
//   const[sectionConfig, setSectionConfig] = useState({
//     showAbout:false,
//     showTeam:false,
//     showCareer:false
//   })

//   return (
//     <>
//       <h1 className="text-3xl p-2 m-2 font-bold">Instamart</h1>
//       <Section
//         title={"About Instamart"}
//         discription={
//           "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains"
//          }
//           isVisible={sectionConfig.showAbout}
//           setIsVisible={()=>{
//             setSectionConfig({
//               showAbout: true,
//               showTeam: false,
//               showCareer:false
//             })
//           }}
//       />

//       <Section
//         title={"Team Instamart"}
//         discription={
//           "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains"
//         }
//         isVisible={sectionConfig.showTeam}
//         setIsVisible={()=>{
//           setSectionConfig({
//             showAbout: false,
//             showTeam: true,
//             showCareer:false
//           })
//         }}
//       />

//       <Section
//         title={"Career Instamart"}
//         discription={
//           "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains"
//         }
//         isVisible={sectionConfig.showCareer}
//         setIsVisible={()=>{
//           setSectionConfig({
//             showAbout: false,
//             showTeam: false,
//             showCareer:true
//           })
//         }}
//       />
//     </>
//   );
// };
// export default Instamart;
