import { useState } from 'react';
import { Entity } from '../types';

export const useEntityModal = () => {
  const [selectedEntity, setSelectedEntity] = useState<Entity | null>(null);
  const [modalVisible, setModalVisible] = useState(false);

  const selectEntity = (entity: Entity): void => {
    setSelectedEntity(entity);
    setModalVisible(true);
  };

  const closeModal = (): void => {
    setModalVisible(false);
    setSelectedEntity(null);
  };

  return {
    selectedEntity,
    modalVisible,
    selectEntity,
    closeModal,
  };
}; 