"use client";

import { X, ExternalLink } from "lucide-react";
import { useEffect } from "react";

type Device = {
  brand: string;
  model: string;
  fullName: string;
  description: string;
  price: number;
  imageUrl: string;
  type: string;
  category: string;
  purchaseUrl?: string | null;
};

type DeviceModalProps = {
  device: Device | null;
  isOpen: boolean;
  onClose: () => void;
  deviceType?: "headphone" | "speaker" | "dacAmp";
};

export default function DeviceModal({
  device,
  isOpen,
  onClose,
  deviceType,
}: DeviceModalProps) {
  const getDeviceTypeLabel = () => {
    switch (deviceType) {
      case "headphone":
        return "헤드폰";
      case "speaker":
        return "스피커";
      case "dacAmp":
        return "DAC-AMP";
      default:
        return device?.category || "";
    }
  };
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener("keydown", handleEscape);
    }

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !device) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl max-h-[90vh] bg-background border border-border rounded-2xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-background/80 backdrop-blur-sm border border-border hover:bg-accent transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="overflow-y-auto max-h-[90vh] scrollbar-hide">
          <div className="aspect-video bg-white relative">
            <img
              src={device.imageUrl}
              alt={device.fullName}
              className="w-full h-full object-contain p-8"
            />
          </div>

          <div className="p-6 space-y-6">
            <div>
              <div className="text-sm text-muted-foreground mb-2">
                {device.brand}
              </div>
              <h2 className="text-3xl font-bold mb-2">{device.model}</h2>
              <p className="text-lg text-muted-foreground">
                {device.description}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 p-4 bg-muted/30 rounded-lg border border-border">
              <div>
                <div className="text-xs text-muted-foreground mb-1">
                  카테고리
                </div>
                <div className="font-semibold">{getDeviceTypeLabel()}</div>
              </div>
              <div>
                <div className="text-xs text-muted-foreground mb-1">연결</div>
                <div className="font-semibold">{device.type}</div>
              </div>
            </div>

            <div className="flex items-center justify-between p-4 bg-muted/30 rounded-lg border border-border">
              <div>
                <div className="text-sm text-muted-foreground mb-1">가격</div>
                <div className="text-2xl font-bold">
                  {device.price.toLocaleString()}원
                </div>
              </div>
              {device.purchaseUrl && (
                <a
                  href={device.purchaseUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg"
                >
                  구매하기
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </div>

            <div className="pt-4 border-t border-border">
              <h3 className="text-sm font-semibold mb-3 text-muted-foreground">
                제품 정보
              </h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">제품명</span>
                  <span className="font-medium">{device.fullName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">브랜드</span>
                  <span className="font-medium">{device.brand}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">모델</span>
                  <span className="font-medium">{device.model}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
