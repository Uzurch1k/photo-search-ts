import { useState, useEffect, useRef } from 'react';
import React from 'react';

import Modal from 'react-modal';
Modal.setAppElement('#root');

import Wrapper from '../Layout/Wrapper/Wrapper';
import Main from '../Layout/Main/Main';
import Section from '../Layout/Section/Section';

import SearchBar from '../SearchBar/SearchBar';
import ImageGallery from '../ImageGallery/ImageGallery';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import Footer from '../Footer/Footer';

import Loader from '../Loader/Loader';
import ImageModal from '../ImageModal/ImageModal';
import ErrorSearch from '../ErrorSearch/ErrorSearch';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

import fetchGalleryPhoto from '/src/API/FetchPhoto.ts';

import './App.scss';

function App() {
  const [gallery, setGallery] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const [error, setError] = useState(false);
  const [showBtn, setShowBtn] = useState(false);

  const galleryRef = useRef(null);

  const [selectedImage, setSelectedImage] = useState(null);
  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal(images) {
    setIsOpen(true);
    setSelectedImage(images);
  }
  function closeModal() {
    setIsOpen(false);
  }

  useEffect(() => {
    if (!searchTerm) {
      return;
    }
    async function fetchImage() {
      try {
        setShowBtn(false);
        setLoading(true);

        const data = await fetchGalleryPhoto(page, searchTerm);
        const { total_pages, results } = data;

        setShowBtn(total_pages > page);
        setGallery(prevGallery => [...prevGallery, ...results]);

        if (results.length === 0) {
          setNotFound(true);
        }

        if (page !== 1) {
          setTimeout(() => {
            const height =
              galleryRef.current.firstElementChild.getBoundingClientRect()
                .height;
            window.scrollBy({ top: height * 2, behavior: 'smooth' });
          }, 100);
        }
      } catch (error) {
        setError(true);
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    fetchImage();
  }, [page, searchTerm]);

  const handleSearch = async query => {
    setNotFound(false);
    setError(false);
    setGallery([]);
    setSearchTerm(query);
    setPage(1);
  };

  const handleClickMore = () => {
    setPage(page + 1);
  };

  return (
    <Wrapper>
      <SearchBar onSearch={handleSearch} />
      <Main>
        <Section>
          {notFound && <ErrorSearch />}
          {!notFound && (
            <ImageGallery
              arrayGallery={gallery}
              searchTerm={searchTerm}
              openModal={openModal}
              galleryRef={galleryRef}
            />
          )}
          {loading && <Loader />}
          {showBtn && <LoadMoreBtn handleClickMore={handleClickMore} />}
          <ImageModal
            selectedImage={selectedImage}
            modalIsOpen={modalIsOpen}
            closeModal={closeModal}
          />
          {error && <ErrorMessage />}
        </Section>
      </Main>
      <Footer />
    </Wrapper>
  );
}

export default App;
