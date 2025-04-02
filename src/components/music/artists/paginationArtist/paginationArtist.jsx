// import React from "react";
// import style from "../../../users/users.module.css";
// import {useDispatch} from "react-redux";
// import {setCurrentArtistPage} from "../../../../redux/actions";
//
// const PaginationArtist = ({ currentPage, totalPages, pageSize }) => {
//     const dispatch = useDispatch();
//
//     const handlePageChange = (page) => {
//         dispatch(setCurrentArtistPage(page));
//     };
//
//     return (
//         <div>
//             {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => {
//                 return p === 1 || p === totalPages || (p >= currentPage - 2 && p <= currentPage + 2) ? (
//                     <span
//                         key={p}
//                         className={currentPage === p ? style.selectedPage : ""}
//                         onClick={() => handlePageChange(p)}
//                     >
//                         {p}{" "}
//                     </span>
//                 ) : p === currentPage - 3 || p === currentPage + 3 ? (
//                     <span key={p}>... </span>
//                 ) : null;
//             })}
//         </div>
//     );
// };
//
// export default PaginationArtist;
